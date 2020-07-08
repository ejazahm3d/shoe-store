import React from "react"
import Hero from "../components/Blocks/Home/Hero"
import Products from "../components/Blocks/Home/Products"

const Home = () => {
    return (
        <div>
            <Hero />
            <Products productsStoreName="home" />
        </div>
    )
}

export default Home
