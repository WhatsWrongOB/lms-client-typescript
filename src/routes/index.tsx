import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { User } from "../pages/Home";

const ProtectedRoute = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/" />;
};

const AdminRoute = () => {

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("CurrentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { token } = useAuth();

  return currentUser?.isAdmin ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="/" />
  );
};

export { ProtectedRoute, AdminRoute };
