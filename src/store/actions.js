import { createAction } from "@reduxjs/toolkit"

export const addToCart = createAction("cart/addToCart")
export const removeFromCart = createAction("cart/removeFromCart")
export const updateQty = createAction("cart/updateQty")
export const updateShipping = createAction("shipping/updateShipping")
