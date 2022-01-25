import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Auth from "../pages/auth/Auth";
import { useAuth } from "../provider/useAuth";
import { routes } from "./list";

const RoutesComp: FC = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ auth, Component, path }) => {
            if (auth && !user) {
              console.log(auth, user);
              return (
                <Route path="/" key={`route ${path}`} element={<Auth />} />
              );
            }
            console.log(auth, user);
            return (
              <Route
                path={path}
                key={`route ${path}`}
                element={<Component />}
              />
            );
          })}
        </Route>

        {/* <Route element={Error404} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
