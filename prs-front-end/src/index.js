import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import Profile from "./components/Profile/Profile";

import { AuthProvider } from "./context/isLogedInContext";
import About from "./components/About/About";
import Myleads from "./components/Myleads/Myleades";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/register", element: <Register /> },
      {
        path: "/login",
        element: <Login />,
      },

      { path: "/profile", element: <Profile /> },
      { path: "/about", element: <About /> },
      { path: "/myleads", element: <Myleads /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
