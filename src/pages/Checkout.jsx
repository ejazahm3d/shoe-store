import React, { useState } from "react"
import { Container, Row, Col } from "react-grid-system"
import { useSelector } from "react-redux"
import { HeadingXLarge } from "baseui/typography"
import CheckoutLayout from "../components/Blocks/Checkout/Layout"
import Shipping from "../components/Blocks/Checkout/Shipping"
import { useStyletron } from "baseui"
import CartInfo from "../components/Blocks/Checkout/CartInfo"

const Checkout = () => {
    const cartState = useSelector((state) => state.cart)
    const [showShipping, setShowShipping] = useState(false)
    const [showPayment, setShowPayment] = useState(true)

    const [css] = useStyletron()
    const spacing = css({ margin: "1rem 0" })
    // eslint-disable-next-line no-unused-vars

    return (
        <Container>
            <Row justify="center">
                <HeadingXLarge>Checkout</HeadingXLarge>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={8}>
                    <div className={spacing}>
                        <CheckoutLayout
                            title="1. Shipping"
                            showContent={showShipping}
                        >
                            <Shipping setShowShipping={setShowShipping} />
                        </CheckoutLayout>
                    </div>
                    <div>
                        <CheckoutLayout
                            title="2. Payment"
                            showContent={showPayment}
                        >
                            <Shipping setShowShipping={setShowPayment} />
                        </CheckoutLayout>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <div className={spacing}>
                        <CartInfo cartInfo={cartState} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout
