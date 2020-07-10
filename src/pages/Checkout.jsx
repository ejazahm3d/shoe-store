import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-grid-system"
import { useSelector } from "react-redux"
import { HeadingXLarge } from "baseui/typography"
import CheckoutLayout from "../components/Blocks/Checkout/Layout"
import Shipping from "../components/Blocks/Checkout/Shipping"
import { useStyletron } from "baseui"
import CartInfo from "../components/Blocks/Checkout/CartInfo"
import Payment from "../components/Blocks/Checkout/Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useNavigate } from "react-router-dom"

const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY)

const Checkout = () => {
    const cartState = useSelector((state) => state.cart)
    const navigate = useNavigate()

    useEffect(() => {
        if (cartState.items.length <= 0) {
            navigate("/")
        }
        return () => {}
    }, [navigate, cartState])
    const [step, setStep] = useState(1)

    const [css] = useStyletron()
    const spacing = css({ margin: "1rem 0" })

    if (cartState.items.length <= 0) return null
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
                            showContent={step === 1}
                        >
                            <Shipping setStep={setStep} />
                        </CheckoutLayout>
                    </div>
                    <div>
                        <CheckoutLayout title="2. Payment" showContent={true}>
                            <Elements stripe={stripePromise}>
                                <Payment setStep={setStep} />
                            </Elements>
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
