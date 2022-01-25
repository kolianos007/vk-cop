import React from "react";
import ReactDOM from "react-dom";
import RoutesComp from "./components/routes/Routes";
import "./index.css";
import { initializeApp } from "firebase/app";
import { AuthProvider } from "./components/provider/AuthProvider";

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyD4tHCDWEtmOTNUaxfhPY3jlEXZA9mS_8A",
  authDomain: "vk-copy-d0a86.firebaseapp.com",
  projectId: "vk-copy-d0a86",
  storageBucket: "vk-copy-d0a86.appspot.com",
  messagingSenderId: "506962107463",
  appId: "1:506962107463:web:da36f2cd1e091434d9e562",
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesComp />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
