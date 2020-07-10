import React from "react"
import Products from "../components/Blocks/Home/Products"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Row, Container } from "react-grid-system"
import { HeadingXLarge } from "baseui/typography"

const ProductsPage = () => {
    const params = useParams()
    const productsCategoryName = params.category
    const state = useSelector((state) => state.products)
    const category = state[productsCategoryName]
    const products = category?.products ?? []
    const productArray = Object.values(products)

    return (
        <Container>
            <Row justify="center">
                <HeadingXLarge $style={{ textAlign: "center" }}>
                    {state?.[productsCategoryName].name}
                </HeadingXLarge>
            </Row>
            <Row justify="center">
                <Products
                    productsCategoryName={productsCategoryName}
                    products={productArray}
                />
            </Row>
        </Container>
    )
}

export default ProductsPage
