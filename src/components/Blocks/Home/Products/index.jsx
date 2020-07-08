import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../../ProductCard"
const Products = ({ productsStoreName = "latest" }) => {
    const productStore = useSelector((state) => state.products)
    const products = productStore[productsStoreName]
    return (
        <div style={{ margin: "5rem 1rem" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",
                    gridGap: "5rem",
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        data={product}
                        key={product.id}
                        productsStoreName={productsStoreName}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
