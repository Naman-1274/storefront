import { createBrowserRouter } from "react-router"
import RootLayout from "./RootLayout"
import RouteError from "./RouteError"
import NotFound from "./NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, lazy: () => import("@/features/catalog/CatalogPage") },
      { path: "product/:id", lazy: () => import("@/features/product/ProductPage") },
      { path: "checkout/:step", lazy: () => import("@/features/checkout/CheckoutPage") },
      { path: "orders", lazy: () => import("@/features/orders/OrdersPage") },
      { path: "*", element: <NotFound /> },
    ],
  },
])