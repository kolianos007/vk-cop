import { Box, Button } from "@mui/material";
import React, { FC, useState } from "react";
import AddPost from "./AddPost";
import Posts from "./Posts";

const Home: FC = () => {
  return (
    <Box>
      <AddPost />
      <Posts />
    </Box>
  );
};

export default Home;
