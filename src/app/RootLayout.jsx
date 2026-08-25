// RootLayout.jsx
import { Outlet } from "react-router"
export default function RootLayout() {
  return (
    <div>
      <header className="p-4 border-b">Storefront</header>
      <Outlet />
    </div>
  )
}