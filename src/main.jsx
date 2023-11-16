import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, BrowserRouter as Router } from "react-router-dom";
import router from "./router";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { MesasProvider } from "./context/MesasProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1051608997183-prdq5s4ntcqbtj3ad83c0no4nv4qa599.apps.googleusercontent.com">
    <AuthProvider>
      <MesasProvider>
        <RouterProvider router={router} />
      </MesasProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
);
