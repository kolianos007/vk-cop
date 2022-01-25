import { Avatar, Card } from "@mui/material";
import React, { FC } from "react";
import { useAuth } from "../../provider/useAuth";

const Profile: FC = () => {
  const { user } = useAuth();

  return (
    <Card sx={{ width: "100%" }}>
      <Avatar src={user?.avatar}></Avatar>
      <h1>{user?.name}</h1>
    </Card>
  );
};

export default Profile;
