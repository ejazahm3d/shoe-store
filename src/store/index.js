import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"
import shoes from "./shoes.json"
import hoodies from "./hoodies.json"
import jackets from "./jackets.json"
import kidsClothes from "./kidsclothes.json"
import home from "./home.json"
import { toast } from "react-toastify"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist"

const mapProducts = (products) => {
    const mappedProducts = {}
    products.forEach((product) => (mappedProducts[product.id] = product))
    return mappedProducts
}

const initialProductsState = {
    home: {
        name: "Men's Shoes",
        route: "/home",
        products: mapProducts(home),
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
        name: "Kid's Clothes",
        route: "/kids",
        products: mapProducts(kidsClothes),
    },
    shoes: {
        name: "Men's Shoes",
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
        clearCart: (state, action) => {
            state.items = []
        },
    },
})

const shippingSlice = createSlice({
    name: "shipping",
    initialState: {
        form: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            phoneNumber: "",
        },
    },
    reducers: {
        updateShipping(shippingState, action) {
            shippingState.form = action.payload
        },
    },
})

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        lastOrder: {},
    },
    reducers: {
        paymentSucceeded: () => {
            toast("Payment Successful", { type: "success" })
        },
        paymentFailed: (state, action) => {
            toast(`Payment Failed: ${action.payload}`, { type: "error" })
        },
        lastOrder: (state, action) => {
            state.lastOrder = action.payload
        },
    },
    extraReducers: {},
})

const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
})

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    shipping: shippingSlice.reducer,
    payment: paymentSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = configureStore({ reducer: persistedReducer })
    let persistor = persistStore(store)
    return { store, persistor }
}
