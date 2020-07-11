import React from "react"
import { useStyletron } from "baseui"
import { Container, Row, Col } from "react-grid-system"
import { Display, Paragraph1, HeadingXSmall } from "baseui/typography"
import { useSelector } from "react-redux"
import ProductItem from "../components/Blocks/Checkout/ProductItem"

const Success = () => {
    const [css] = useStyletron()
    const spacing = css({ margin: "0.5rem 0" })
    const lastOrder = useSelector((state) => state.payment?.lastOrder)
    const subtotal = lastOrder?.subtotal
    const total = lastOrder?.total
    const tax = lastOrder?.tax
    const shipping = lastOrder?.shipping
    return (
        <Container className={css({ maxHeight: "100%" })}>
            <Row justify="center" className={css({ marginBottom: "2rem" })}>
                <Display className={css({ textAlign: "center" })}>
                    Success
                </Display>
            </Row>
            <Row>
                <Col sm={12} md={6}>
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
                </Col>
                <Col sm={12} md={6}>
                    {lastOrder?.items?.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Success
