import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages"
import Product from "../pages/Product"
import ProductsPage from "../pages/Products"
import Checkout from "../pages/Checkout"
import Success from "../pages/Success"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<ProductsPage />}></Route>
            <Route path="/:category/:product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    )
}

export default Router
