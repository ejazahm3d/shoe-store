import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"
import shoes from "./shoes.json"
import hoodies from "./hoodies.json"
import jackets from "./jackets.json"
import kidsClothes from "./kidsclothes.json"

const mapProducts = (products) => {
    const mappedProducts = {}
    products.forEach((product) => (mappedProducts[product.id] = product))
    return mappedProducts
}

const initialProductsState = {
    home: {
        name: "Men's Shoes",
        route: "/home",
        products: mapProducts(shoes),
    },
    hoodies: {
        name: "Men's Hoodies and Sweaters",
        route: "/hoodies",
        products: mapProducts(hoodies),
    },
    jackets: {
        name: "Men's Jackets and Vests",
        route: "/jackets",
        products: mapProducts(jackets),
    },
    kids: {
        name: "Men's Jackets and Vests",
        route: "/kids",
        products: mapProducts(kidsClothes),
    },
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
})

export const store = configureStore({
    reducer: combineReducers({ products: productsSlice.reducer }),
})
