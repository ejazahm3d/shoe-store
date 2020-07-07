import React from "react"
import Hero from "../components/Blocks/Home/Hero"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"

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
        </FlexGrid>
    )
}

export default Home
