import { createContext, useContext, useEffect, useState } from "react"
import { auth, onAuthStateChanged } from "@/lib/firebase/auth"

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [state, setState] = useState({ status: "loading" })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState(user ? { status: "authed", user } : { status: "anon" })
    })
    return unsubscribe
  }, [])

  if (state.status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (ctx === undefined) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}