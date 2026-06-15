import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const customer = localStorage.getItem("customer");

  return customer
    ? children
    : <Navigate to="/login" />;
}

export default ProtectedRoute;