import React from "react"
import { Drawer, SIZE } from "baseui/drawer"
import { HeadingMedium } from "baseui/typography"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { Button } from "baseui/button"

const CartDrawer = ({ isOpen, setIsOpen }) => {
    const cartState = useSelector((state) => state.cart)
    const items = cartState?.items
    return (
        <Drawer
            isOpen={isOpen}
            size={SIZE.default}
            autoFocus
            onClose={() => setIsOpen(false)}
        >
            <HeadingMedium>Cart</HeadingMedium>
            <div style={{ maxHeight: "60%", overflowY: "scroll" }}>
                {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            {items.length > 0 && (
                <Button $style={{ marginTop: "2rem" }}>Go to Checkout</Button>
            )}
        </Drawer>
    )
}

export default CartDrawer
