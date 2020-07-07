import React from "react"
import Hero from "../components/Blocks/Home/Hero"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import Products from "../components/Blocks/Home/Products"

const Home = () => {
    return (
        <FlexGrid
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <FlexGridItem>
                <Hero />
            </FlexGridItem>
            <FlexGridItem>
                <Products />
            </FlexGridItem>
        </FlexGrid>
    )
}

export default Home
