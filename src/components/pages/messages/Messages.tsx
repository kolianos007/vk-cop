import {
  Alert,
  Avatar,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import { IMessage, IPost } from "../../../types";
import { useAuth } from "../../provider/useAuth";
import Card from "../../ui/Card";
import { Send as SendIcon } from "@mui/icons-material";

const Messages: FC = () => {
  const { user, db } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (doc) => {
      const array: IMessage[] = [];
      doc.forEach((d: any) => {
        array.push(d.data());
      });
      setMessages(array);
    });

    return () => {
      unsub();
    };
  }, []);

  const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await addDoc(collection(db, "messages"), {
        user,
        message,
      });
    } catch (e: any) {
      setError(e);
    }
    setMessage("");
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Card>
        <List style={{ height: "65vh" }}>
          {messages.map((msg, i) => (
            <ListItem key={i}>
              <Grid
                container
                sx={msg.user.id === user?.id ? { textAlign: "right" } : {}}
              >
                <Grid
                  display="flex"
                  justifyContent={
                    msg.user.id === user?.id ? "flex-end" : "flex-start"
                  }
                  item
                  xs={12}
                >
                  <Avatar
                    sx={{ width: "30", height: "30" }}
                    src={msg.user.avatar}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText primary={msg.message}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary={msg.user.name}></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid item xs={1}>
            <Fab color="primary" onClick={addMessageHandler}>
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Messages;
