import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages"
import Shoe from "../pages/Shoe"
import Product from "../pages/Product"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":category" element={<Shoe />}>
                <Route path=":product" element={<Product />} />
            </Route>
        </Routes>
    )
}

export default Router
