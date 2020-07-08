import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const Product = () => {
    const params = useParams()
    const state = useSelector((state) => state.products)

    return <div>Product</div>
}

export default Product
