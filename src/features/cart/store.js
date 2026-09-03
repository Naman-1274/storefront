import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const CART_VERSION = 1

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, qty = 1) => {
        const { items } = get()
        const existing = items.find((i) => i.productId === product.id)

        if (existing) {
          const nextQty = Math.min(existing.qty + qty, product.stock)
          set({
            items: items.map((i) =>
              i.productId === product.id ? { ...i, qty: nextQty } : i
            ),
          })
        } else {
          set({
            items: [
              ...items,
              {
                productId: product.id,
                qty: Math.min(qty, product.stock),
                priceInPaiseAtAdd: product.finalPriceInPaise,
                titleAtAdd: product.title,
                image: product.thumbnail,
                stock: product.stock,
              },
            ],
          })
        }
      },

      setQty: (productId, qty) => {
        const { items } = get()
        const item = items.find((i) => i.productId === productId)
        if (!item) return
        const clamped = Math.max(0, Math.min(qty, item.stock))
        if (clamped === 0) {
          set({ items: items.filter((i) => i.productId !== productId) })
        } else {
          set({
            items: items.map((i) =>
              i.productId === productId ? { ...i, qty: clamped } : i
            ),
          })
        }
      },

      removeItem: (productId) =>
        set((s) => ({ items: s.items.filter((i) => i.productId !== productId) })),

      clear: () => set({ items: [] }),

      count: () => get().items.reduce((sum, i) => sum + i.qty, 0),

      totalInPaise: () =>
        get().items.reduce((sum, i) => sum + i.qty * i.priceInPaiseAtAdd, 0),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      version: CART_VERSION,
      migrate: (persisted, version) => {
        if (version < CART_VERSION) {
          return { items: [] } // wipe on shape change rather than crash
        }
        return persisted
      },
    }
  )
)