import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import { useCartStore } from "./store"
import { formatINR } from "@/lib/money"

export function CartLineItem({ item }) {
  const setQty = useCartStore((s) => s.setQty)
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <div className="flex gap-3">
      <img
        src={item.image}
        alt={item.titleAtAdd}
        width={64}
        height={64}
        className="rounded object-cover"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.titleAtAdd}</p>
        <p className="text-sm text-muted-foreground">
          {formatINR(item.priceInPaiseAtAdd)}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7"
            onClick={() => setQty(item.productId, item.qty - 1)}
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center text-sm" aria-live="polite">
            {item.qty}
          </span>
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7"
            onClick={() => setQty(item.productId, item.qty + 1)}
            disabled={item.qty >= item.stock}
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </Button>

          <button
            onClick={() => removeItem(item.productId)}
            className="ml-auto text-muted-foreground hover:text-destructive"
            aria-label="Remove item"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}