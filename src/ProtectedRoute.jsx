import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = window.localStorage.getItem("token");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
