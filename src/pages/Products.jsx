import React from "react"
import Products from "../components/Blocks/Home/Products"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const ProductsPage = () => {
    const params = useParams()
    const productsStoreName = params.category
    const productStore = useSelector((state) => state.products)
    const category = productStore[productsStoreName]
    const products = category?.products ?? []
    const productArray = Object.values(products)

    return (
        <>
            <Products
                productsStoreName={params.category}
                products={productArray}
            />
        </>
    )
}

export default ProductsPage
