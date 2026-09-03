import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { useCartStore } from "./store"
import { CartDrawer } from "./CartDrawer"

export function CartButton() {
  const [open, setOpen] = useState(false)
  const count = useCartStore((s) => s.count())

  return (
    <>
      <button onClick={() => setOpen(true)} className="relative p-2" aria-label="Open cart">
        <ShoppingCart className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
      <CartDrawer open={open} onOpenChange={setOpen} />
    </>
  )
}