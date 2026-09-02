import { Link } from "react-router"
import { formatINR } from "@/lib/money"

export function ProductCard({ product }){
    return (
            <Link to={`/product/${product.id}/${product.slug}`}
            className="group block rounded-lg border p-3 hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden rounded-md bg-neutral-100">
                <img
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.src = "/placeholder.png" }}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>
            <h3 className="mt-2 text-sm font-medium line-clamp-2">{product.title}</h3>
            <p className="text-xs text-neutral-500">{product.brand ?? product.category}</p>
            <p className="mt-1 font-semibold">{formatINR(product.finalPriceInPaise)}</p>
            </Link>
    )
}