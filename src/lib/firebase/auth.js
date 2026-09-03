import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { firebaseApp } from "./app"

export const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (err) {
    if (err.code === "auth/popup-closed-by-user") {
      return null // user just changed their mind, not a real error
    }
    throw err
  }
}

export function signOutUser() {
  return signOut(auth)
}

export { onAuthStateChanged }