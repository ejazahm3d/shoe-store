import React from "react"
import { Drawer } from "baseui/drawer"
import { HeadingMedium } from "baseui/typography"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartDrawer = ({ isOpen, setIsOpen }) => {
    const cartState = useSelector((state) => state.cart)
    const items = Object.values(cartState?.items ?? [])
    return (
        <Drawer isOpen={isOpen} autoFocus onClose={() => setIsOpen(false)}>
            <HeadingMedium>Cart</HeadingMedium>
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </Drawer>
    )
}

export default CartDrawer
