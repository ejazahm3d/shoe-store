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
    shoes: {
        name: "Men's Jackets and Vests",
        route: "/shoes",
        products: mapProducts(shoes),
    },
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
    },
    reducers: {
        addToCart: (state, action) => {
            const currentItem = state.items[action.payload.id]
            if (currentItem) {
                state.items[action.payload.id] = {
                    ...action.payload,
                    qty: currentItem["qty"] + 1,
                }
            } else {
                state.items[action.payload.id] = action.payload
            }
        },
        removeFromCart: (state, action) => {
            delete state.items[action.payload]
        },
    },
})

const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
})

export const store = configureStore({
    reducer: combineReducers({
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    }),
})
