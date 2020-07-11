import React, { useState } from "react"
import Navbar from "./Navbar"
import CartDrawer from "./Cart"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./Footer"

const PageLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            <main style={{ width: "100%" }}>{children}</main>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />
        </div>
    )
}

export default PageLayout
