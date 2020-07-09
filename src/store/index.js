import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"
import shoes from "./shoes.json"
import hoodies from "./hoodies.json"
import jackets from "./jackets.json"
import kidsClothes from "./kidsclothes.json"
import { toast } from "react-toastify"

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
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            const allCartItems = state.items
            const cartItemIndex = allCartItems.findIndex(
                (item) => action.payload.id === item.id
            )
            if (cartItemIndex !== -1) {
                state.items[cartItemIndex] = {
                    ...action.payload,
                    qty: state.items[cartItemIndex].qty + 1,
                }
                toast("Added to Cart", {
                    type: "info",
                })
            } else {
                state.items.push(action.payload)
                toast("Added to Cart", {
                    type: "info",
                })
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
            toast("Removed from Cart", {
                type: "error",
            })
        },
        updateQty(state, action) {
            const allCartItems = state.items
            const cartItemIndex = allCartItems.findIndex(
                (item) => action.payload.id === item.id
            )

            if (cartItemIndex !== -1) {
                allCartItems[cartItemIndex] = action.payload
            }
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
