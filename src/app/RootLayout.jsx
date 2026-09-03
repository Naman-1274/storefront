// RootLayout.jsx
import { Outlet } from "react-router"
import { CartButton } from "@/features/cart/CartButton"


export default function RootLayout() {
  return (
    <div>
      <header className="p-4 border-b flex justify-between items-center">
        <span>StoreFront</span>
        <CartButton />
      </header>
      <Outlet />
    </div>
  )
}