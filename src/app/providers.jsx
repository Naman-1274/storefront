import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ErrorBoundary } from "react-error-boundary"
import { Toaster } from "@/components/ui/sonner"
import { queryClient } from "@/lib/query"

function AppCrash() {
  return <div className="p-8 text-center">Something broke. Refresh the page.</div>
}

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<AppCrash />}>{children}</ErrorBoundary>
      <Toaster richColors position="top-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}