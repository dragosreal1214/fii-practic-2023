import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../layout/NavBar"
const isLoggedIn = () => {
  const isLoggedInFlag = localStorage.getItem("isLoggedIn")

  return isLoggedInFlag === "true"
}

export default function PrivateRoute() {
  if (!isLoggedIn()) {
    // navigate to login
    return <Navigate to="/auth/login" />
  }

  //return page
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
