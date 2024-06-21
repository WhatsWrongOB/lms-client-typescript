import { Navigate, Outlet } from "react-router-dom";
import { User } from "../components/Navbar";
import { useGetToken, useGetUser } from "../hooks";

const ProtectedRoute = () => {
  const token: string | null = useGetToken();

  return token ? <Outlet /> : <Navigate to="/" />;
};

const AdminRoute = () => {
  const currentUser: User | null = useGetUser();

  const token: string | null = useGetToken();

  return currentUser?.isAdmin ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="/" />
  );
};

export { ProtectedRoute, AdminRoute };
