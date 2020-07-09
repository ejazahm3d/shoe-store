import React, { useState } from "react"
import Navbar from "./Navbar"
import CartDrawer from "./Cart"

const PageLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            <main style={{ width: "100%" }}>{children}</main>
        </div>
    )
}

export default PageLayout
