import { Navigate, Outlet } from "react-router-dom";
import { useGetToken, useGetUser } from "../hooks";
import { User } from "../types";

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
    <Navigate to="/lms" />
  ) : (
    <Navigate to="/" />
  );
};

export { ProtectedRoute, AdminRoute };
