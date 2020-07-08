import React from "react"
import Products from "../components/Blocks/Home/Products"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const ProductsPage = () => {
    const params = useParams()
    const productsCategoryName = params.category
    const state = useSelector((state) => state.products)
    const category = state[productsCategoryName]
    const products = category?.products ?? []
    const productArray = Object.values(products)

    return (
        <>
            <Products
                productsCategoryName={productsCategoryName}
                products={productArray}
            />
        </>
    )
}

export default ProductsPage
