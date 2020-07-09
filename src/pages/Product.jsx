import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Container, Row, Col } from "react-grid-system"
import { HeadingMedium, HeadingLarge, Paragraph1 } from "baseui/typography"
import { Button } from "baseui/button"

const Product = () => {
    /* TODO: 
1) Toast Notifications
2) Add to cart
3) Wishlist
4) Checkout

*/

    const params = useParams()
    const state = useSelector((state) => state.products)
    const productsCategoryName = params?.category
    const productId = params?.product
    const products = state?.[productsCategoryName]?.products
    const currentProduct = products?.[productId]
    const images = currentProduct?.images ?? []
    console.log(images)
    return (
        <Container>
            <div style={{ marginTop: "2rem" }}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5}>
                        <Carousel
                            showStatus={false}
                            showArrows
                            showIndicators={false}
                            dynamicHeight={true}
                        >
                            {images.map((img, index) => (
                                <div key={img} index={index}>
                                    <img
                                        style={{ width: "100%" }}
                                        src={img}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7}>
                        <HeadingLarge marginTop="0.5rem" marginBottom="1rem">
                            {currentProduct.name}
                        </HeadingLarge>
                        <HeadingMedium marginTop="0">
                            Price:{" "}
                            <span style={{ color: "red" }}>
                                {currentProduct.price}
                            </span>
                        </HeadingMedium>
                        <Paragraph1
                            dangerouslySetInnerHTML={{
                                __html: currentProduct.description,
                            }}
                        ></Paragraph1>
                        <Button
                            shape="square"
                            size="large"
                            $style={{ marginTop: "2rem" }}
                        >
                            Add to Cart
                        </Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Product
