// RootLayout.jsx
import { Outlet } from "react-router"
import { CartButton } from "@/features/cart/CartButton"
import { AuthStatus } from "@/features/auth/AuthStatus"


export default function RootLayout() {
  return (
    <div>
      <header className="p-4 border-b flex justify-between items-center">
        <span>StoreFront</span>
        <div className="flex items-center gap-4">
          <AuthStatus />
          <CartButton />
        </div>
      </header>
      <Outlet />
    </div>
  )
}