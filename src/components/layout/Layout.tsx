import { Grid } from "@mui/material";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../provider/useAuth";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: FC = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && (
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item md={user ? 9 : 12}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
