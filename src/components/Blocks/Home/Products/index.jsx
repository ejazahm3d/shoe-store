import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../../ProductCard"
import { Cell, Grid, ALIGNMENT, BEHAVIOR } from "baseui/layout-grid"
const Products = () => {
    const { latest } = useSelector((state) => state.products)

    return (
        <div style={{ margin: "5rem 1rem" }}>
            <Grid
                gridGaps={20}
                align={ALIGNMENT.start}
                behavior={BEHAVIOR.fluid}
                gridGutters={100}
            >
                {latest.map((product) => (
                    <Cell key={product.id} span={4}>
                        <ProductCard data={product} />
                    </Cell>
                ))}
            </Grid>
        </div>
    )
}

export default Products
