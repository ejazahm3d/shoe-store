import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../../ProductCard"
import useBreakPoint from "../../../../hooks/useBreakpoint"
import { useStyletron } from "baseui"

const Products = ({ productsStoreName }) => {
    const productStore = useSelector((state) => state.products)
    const { products } = productStore[productsStoreName]
    const productArray = Object.values(products)
    const [css] = useStyletron()
    const breakPoint = useBreakPoint()
    const smXs = breakPoint === "sm" || breakPoint === "xs"

    return (
        <div className={css({ margin: `5rem ${smXs ? "2rem" : "8rem"}` })}>
            <div
                className={css({
                    display: "grid",
                    gridTemplateColumns: `repeat(auto-fit, minmax(${
                        smXs ? "100%" : "22rem"
                    }, 1fr))`,
                    gridGap: "3rem",
                })}
            >
                {productArray.map((product) => (
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
