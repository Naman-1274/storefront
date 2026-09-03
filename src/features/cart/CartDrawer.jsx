import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCartStore } from "./store"
import { CartLineItem } from "./CartLineItem"
import { formatINR } from "@/lib/money"

export function CartDrawer({ open, onOpenChange }) {
  const items = useCartStore((s) => s.items)
  const totalInPaise = useCartStore((s) => s.totalInPaise())

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <p className="p-4 text-muted-foreground">Your cart is empty.</p>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col gap-4 p-4">
            {items.map((item) => (
              <CartLineItem key={item.productId} item={item} />
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between font-medium mb-3">
              <span>Total</span>
              <span>{formatINR(totalInPaise)}</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}