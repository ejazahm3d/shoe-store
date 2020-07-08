import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages"
import Product from "../pages/Product"
import ProductsPage from "../pages/Products"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":category" element={<ProductsPage />}>
                <Route path=":product" element={<Product />} />
            </Route>
        </Routes>
    )
}

export default Router
