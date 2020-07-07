import React from "react"
import { Link } from "react-router-dom"
import { Button } from "baseui/button"
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
