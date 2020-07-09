import React from "react"
import { Drawer, SIZE } from "baseui/drawer"
import { HeadingMedium } from "baseui/typography"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { Button } from "baseui/button"
import { Link } from "react-router-dom"
import { useStyletron } from "styletron-react"

const CartDrawer = ({ isOpen, setIsOpen }) => {
    const cartState = useSelector((state) => state.cart)
    const [css] = useStyletron()
    const linkStyles = css({
        textDecoration: "none",
        ":visited": {
            color: "inherit",
        },
    })
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
                <Link className={linkStyles} to="/checkout">
                    <Button
                        $style={{ marginTop: "2rem" }}
                        onClick={() => setIsOpen(false)}
                    >
                        Go to Checkout
                    </Button>
                </Link>
            )}
        </Drawer>
    )
}

export default CartDrawer
