import React from "react"
import Products from "../components/Blocks/Home/Products"
import { useParams } from "react-router-dom"

const ProductsPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <Products productsStoreName={params.category} />
        </div>
    )
}

export default ProductsPage
