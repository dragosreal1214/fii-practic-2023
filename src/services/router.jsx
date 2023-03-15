import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Find from "../pages/Find"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Register from "../pages/Register"

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "find",
    index: true,
    element: <Find />,
  },
  {
    path: "profile",
    index: true,
    element: <Profile />,
  },
])
