import { useQuery } from "@tanstack/react-query"
import { fetchAllProducts } from "@/lib/api/products"
import { keys } from "@/lib/query"
import { ProductCard } from "./ProductCard"
import { ProductGridSkeleton } from "./ProductGridSkeleton"
import { usePagination } from "./usePagination"
import { Button } from "@/components/ui/button"

export function Component() {
  const { data, isLoading, error } = useQuery({
    queryKey: keys.products,
    queryFn: fetchAllProducts,
  })

  const { page, setPage, totalPages, pageItems } = usePagination(data ?? [])

  if (isLoading) {
    return (
      <div className="p-6">
        <ProductGridSkeleton />
      </div>
    )
  }

  if (error) {
    return <div className="p-8">Couldn't load products. {error.message}</div>
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pageItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => { setPage((p) => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }) }}
        >
          Previous
        </Button>
        <span className="text-sm">Page {page} of {totalPages}</span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => { setPage((p) => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }) }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}