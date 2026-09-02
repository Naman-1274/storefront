export function ProductGridSkeleton({ count = 24 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-lg border p-3">
          <div className="aspect-square rounded-md bg-neutral-200 animate-pulse" />
          <div className="mt-2 h-4 w-3/4 bg-neutral-200 animate-pulse rounded" />
          <div className="mt-1 h-4 w-1/2 bg-neutral-200 animate-pulse rounded" />
        </div>
      ))}
    </div>
  )
}