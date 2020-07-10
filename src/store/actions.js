import { createAction } from "@reduxjs/toolkit"

export const addToCart = createAction("cart/addToCart")
export const removeFromCart = createAction("cart/removeFromCart")
export const updateQty = createAction("cart/updateQty")
export const clearCart = createAction("cart/clearCart")

export const updateShipping = createAction("shipping/updateShipping")

export const paymentSucceeded = createAction("payment/paymentSucceeded")
export const lastOrder = createAction("payment/lastOrder")
export const paymentFailed = createAction("payment/paymentFailed")
