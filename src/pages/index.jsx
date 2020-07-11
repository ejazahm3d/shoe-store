import React from "react"
import Hero from "../components/Blocks/Home/Hero"
import Products from "../components/Blocks/Home/Products"
import { useSelector } from "react-redux"
import { Container, Row } from "react-grid-system"
import { HeadingLarge } from "baseui/typography"

const Home = () => {
    const homeProducts = useSelector((state) =>
        Object.values(state.products?.home?.products ?? [])
    )

    return (
        <div>
            <Hero />
            <Container>
                <Row justify="center">
                    <HeadingLarge $style={{ textAlign: "center" }}>
                        Latest Collection
                    </HeadingLarge>
                </Row>
                <Row>
                    <Products
                        productsCategoryName="home"
                        products={homeProducts}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Home
