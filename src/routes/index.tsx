import { Navigate, Outlet } from "react-router-dom";
import { User } from "../pages/Home";


const ProtectedRoute = () => {
  const token: string | null = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/" />;
};


const AdminRoute = () => {
  const storedUser: string | null = localStorage.getItem("CurrentUser");
  const currentUser: User | null = storedUser ? JSON.parse(storedUser) : null;

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
