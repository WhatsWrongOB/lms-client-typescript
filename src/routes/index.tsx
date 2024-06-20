import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { User } from "../pages/Home";

const ProtectedRoute = () => {
  const token: string | null = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/" />;
};

const AdminRoute = () => {
  
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("CurrentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const token: string | null = localStorage.getItem("token");

  return currentUser?.isAdmin ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="/" />
  );
};

export { ProtectedRoute, AdminRoute };
