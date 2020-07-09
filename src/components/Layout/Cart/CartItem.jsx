import React, { useState } from "react"
import { Button } from "baseui/button"
import { useDispatch } from "react-redux"
import { removeFromCart, updateQty } from "../../../store/actions"
import { Row, Col, Container } from "react-grid-system"
import { LabelMedium, H6 } from "baseui/typography"
import { useStyletron } from "baseui"

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const [css, theme] = useStyletron()
    // const brkpoint = useBreakpoint()

    const onSubmit = (e) => {
        const qty = parseInt(e.target.value)
        dispatch(updateQty({ ...item, qty }))
    }
    return (
        <Container>
            <Row justify="start" align="start">
                <Col sm={4} xs={4} md={4} lg={4}>
                    <img
                        className={css({
                            width: "100%",
                            height: "10rem",
                            objectFit: "contain",
                        })}
                        src={item.images[0]}
                        alt=""
                    />
                </Col>
                <Col sm={4} xs={4} md={4} lg={4} style={{ padding: "1rem" }}>
                    <H6 margin="0">{item.name}</H6>
                    <LabelMedium color={theme.colors.primary600}>
                        <input
                            className={css({ width: "100%" })}
                            type="number"
                            value={item.qty}
                            onChange={(e) => onSubmit(e)}
                        />
                        {/* Qty: {item.qty} */}
                    </LabelMedium>
                    <LabelMedium color={theme.colors.primary600}>
                        Price:{" "}
                        <span
                            className={css({
                                color: theme.colors.negative600,
                            })}
                        >
                            {item.price}
                        </span>
                    </LabelMedium>
                    {/* <LabelMedium>{item.qty}</LabelMedium> */}
                </Col>
                <Col sm={4} xs={4} md={4} lg={4}>
                    <Button onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartItem
