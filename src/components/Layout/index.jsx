import React, { useState } from "react"
import Navbar from "./Navbar"
import CartDrawer from "./Drawer"

const PageLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            <main>{children}</main>
        </>
    )
}

export default PageLayout
