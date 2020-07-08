import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"
import jsonProducts from "./products.json"

const products = {}
jsonProducts.forEach((product) => (products[product.id] = product))

const initialProductsState = {
    home: jsonProducts,
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
})

export const store = configureStore({
    reducer: combineReducers({ products: productsSlice.reducer }),
})
