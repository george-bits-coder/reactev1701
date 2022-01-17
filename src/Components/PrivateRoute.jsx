import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  if (true) {
    return <Navigate to="/login" />;
  }
};
