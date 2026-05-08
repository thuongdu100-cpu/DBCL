import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import hasPermission from "../auth/hasPermission";

export default function ProtectedRoute({
  children,
  permission,
}) {

  const { user } = useAuth();

  // CHƯA LOGIN → login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // KHÔNG CÓ QUYỀN → 403
  if (
    permission &&
    !hasPermission(user.role, permission)
  ) {
    return <Navigate to="/403" replace />;
  }

  return children;
}