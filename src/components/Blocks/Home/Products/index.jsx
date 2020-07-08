import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../../ProductCard"
const Products = () => {
    const { latest } = useSelector((state) => state.products)

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
                {latest.map((product) => (
                    <ProductCard data={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default Products
