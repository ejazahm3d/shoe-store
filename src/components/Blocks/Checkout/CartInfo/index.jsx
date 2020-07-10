import React from "react"
import { Row, Col } from "react-grid-system"
import CheckoutLayout from "../Layout"
import { Paragraph1, HeadingSmall, HeadingXSmall } from "baseui/typography"
import { useStyletron } from "baseui"
import ProductItem from "../ProductItem"

export const calculateSubtotal = (items) => {
    return items?.reduce(
        (acc, curr) => parseInt(curr.price.slice(1)) * parseInt(curr.qty) + acc,
        0
    )
}

export const shipping = 10
export const tax = 0

const CartInfo = ({ cartInfo }) => {
    const subtotal = calculateSubtotal(cartInfo?.items)

    const total = subtotal + shipping + tax
    const [css] = useStyletron()
    const spacing = css({ margin: "0.5rem 0" })
    return (
        <CheckoutLayout title="In Your Cart" showContent={true} invert={true}>
            <Row justify="between" className={spacing}>
                <Col>
                    <Paragraph1 margin="0">Subtotal</Paragraph1>
                </Col>
                <Col style={{ textAlign: "end" }}>
                    <Paragraph1 margin="0">${subtotal}</Paragraph1>
                </Col>
            </Row>
            <Row justify="between" className={spacing}>
                <Col>
                    <Paragraph1 margin="0">Shipping</Paragraph1>
                </Col>
                <Col style={{ textAlign: "end" }}>
                    <Paragraph1 margin="0">${shipping}</Paragraph1>
                </Col>
            </Row>
            <Row justify="between" className={spacing}>
                <Col>
                    <Paragraph1 margin="0">Tax</Paragraph1>
                </Col>
                <Col style={{ textAlign: "end" }}>
                    <Paragraph1 margin="0">${tax}</Paragraph1>
                </Col>
            </Row>
            <Row justify="between" className={spacing}>
                <Col>
                    <HeadingXSmall margin="0">Total</HeadingXSmall>
                </Col>
                <Col style={{ textAlign: "end" }}>
                    <HeadingXSmall margin="0">${total}</HeadingXSmall>
                </Col>
            </Row>
            <Row>
                <HeadingSmall margin="0">Your Items</HeadingSmall>
                {cartInfo?.items?.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </Row>
        </CheckoutLayout>
    )
}

export default CartInfo
