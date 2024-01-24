import { Navigate, Outlet } from "react-router-dom";

import constants from "@/helpers/constants";

import { useAuth } from "@/contexts/AuthContext";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) return <Navigate to={constants.ROUTE_PATHS.LOGIN}></Navigate>;

  return <Outlet></Outlet>;
};
