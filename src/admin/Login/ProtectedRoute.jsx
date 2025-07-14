import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole = "admin" }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const userType = localStorage.getItem("userType");

  // Check if user is authenticated
  if (!token) {
    if (requiredRole === "admin") {
      return <Navigate to="/adminlogin" replace />;
    } else {
      return <Navigate to="/register" replace />;
    }
  }

  // Check if user has the required role
  if (role !== requiredRole) {
    if (requiredRole === "admin") {
      return <Navigate to="/adminlogin" replace />;
    } else {
      return <Navigate to="/register" replace />;
    }
  }

  // Additional check for user type
  if (userType !== requiredRole) {
    if (requiredRole === "admin") {
      return <Navigate to="/adminlogin" replace />;
    } else {
      return <Navigate to="/register" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;