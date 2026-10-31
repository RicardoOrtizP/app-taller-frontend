import { Navigate } from "react-router-dom";

interface OnlyPublicRouteProps {
  children: React.ReactNode;
}

export const OnlyPublicRoute = ({ children }: OnlyPublicRouteProps) => {
  const isLoading = false;
  const isAuthenticatied = false;

  if (isLoading) {
    return <>Cargando...</>;
  }
  if (isAuthenticatied) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
};
