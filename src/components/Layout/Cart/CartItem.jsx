import React from "react"
import { Button } from "baseui/button"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../../../store/actions"

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <>
            {item.name}: {item.qty}
            <Button onClick={() => dispatch(removeFromCart(item.id))}>
                RemoveFrom Cart
            </Button>
        </>
    )
}

export default CartItem
