import { QuestionAnswer } from "@mui/icons-material";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "./dataUsers";

const UserItems: FC = () => {
  const navigate = useNavigate();
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: "#f1f7fa",
        borderRadius: 3,
        border: "none",
      }}
    >
      {users.map((user) => (
        <Link
          key={user.id}
          to={`/profile/${user.id}`}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#111",
            marginBottom: 12,
          }}
        >
          <Box
            sx={{
              position: "relative",
              marginRight: 2,
              overflow: "hidden",
              width: 50,
              height: 50,
            }}
          >
            <Avatar
              src={user.avatar}
              alt=""
              sx={{ width: 46, height: 46, borderRadius: "50%" }}
            />
            {user.isInNetwork && (
              <Box
                sx={{
                  backgroundColor: "#4fb14f",
                  border: "2px solid #f1f7fa",
                  width: 12,
                  height: 12,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  borderRadius: "50%",
                }}
              />
            )}
          </Box>
          <span style={{ fontSize: 14 }}>{user.name}</span>
        </Link>
      ))}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/messages")}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserItems;
