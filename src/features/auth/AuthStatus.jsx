import { useAuth } from "./AuthProvider"
import { GoogleSignInButton } from "./GoogleSignInButton"
import { signOutUser } from "@/lib/firebase/auth"
import { Button } from "@/components/ui/button"

export function AuthStatus() {
  const auth = useAuth()

  if (auth.status === "anon") return <GoogleSignInButton />

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{auth.user.displayName}</span>
      <Button variant="outline" size="sm" onClick={signOutUser}>
        Sign out
      </Button>
    </div>
  )
}