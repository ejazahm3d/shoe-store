import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"
import shoesJson from "./shoes.json"

const shoeProducts = {}
shoesJson.forEach((product) => (shoeProducts[product.id] = product))

const initialProductsState = {
    home: {
        name: "Men's Shoes",
        products: shoeProducts,
    },
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
})

export const store = configureStore({
    reducer: combineReducers({ products: productsSlice.reducer }),
})
