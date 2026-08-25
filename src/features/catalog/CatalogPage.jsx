import { useQuery } from "@tanstack/react-query"
import { fetchAllProducts } from "@/lib/api/products"
import { keys } from "@/lib/query"
import { formatINR } from "@/lib/money"

export function Component() {
  const { data, isLoading, error } = useQuery({
    queryKey: keys.products,
    queryFn: fetchAllProducts,
  })

  if (isLoading) return <div className="p-8">Loading...</div>
  if (error) return <div className="p-8">Error: {error.message}</div>

  return (
    <div className="p-8">
      <p>{data.length} products loaded</p>
      <p>First product price: {formatINR(data[0].finalPriceInPaise)}</p>
    </div>
  )
}