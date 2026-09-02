import { useState, useMemo } from "react"

const PAGE_SIZE = 24

export function usePagination(items) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return items.slice(start, start + PAGE_SIZE)
  }, [items, page])

  return { page, setPage, totalPages, pageItems }
}