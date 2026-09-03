import { Button } from "@/components/ui/button"
import { signInWithGoogle } from "@/lib/firebase/auth"
import { toast } from "sonner"

export function GoogleSignInButton() {
  const handleClick = async () => {
    try {
      await signInWithGoogle()
    } catch {
      toast.error("Sign-in failed", { description: "Please try again." })
    }
  }

  return <Button onClick={handleClick}>Sign in with Google</Button>
}