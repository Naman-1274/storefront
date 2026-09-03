import { Navigate, useLocation } from "react-router"
import { useAuth } from "./AuthProvider"

export function RequireAuth({ children }) {
  const auth = useAuth()
  const location = useLocation()

  if (auth.status === "anon") {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}