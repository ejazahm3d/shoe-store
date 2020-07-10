import React from "react"
import { Row, Col } from "react-grid-system"
import { useForm } from "react-hook-form"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import Stripe from "../Stripe"
import Axios from "axios"
import { api } from "../../../../env"
import { useDispatch, useSelector } from "react-redux"
import {
    paymentSucceeded,
    paymentFailed,
    clearCart,
    lastOrder,
} from "../../../../store/actions"
import { useNavigate } from "react-router-dom"
import { calculateSubtotal, tax, shipping } from "../CartInfo"
const Payment = ({ setStep }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart?.items)
    const [css] = useStyletron()
    const navigate = useNavigate()

    const getClientSecret = async () => {
        const res = await Axios.get(api)
        return { clientSecret: res.data.client_secret }
    }
    const onSubmit = async (data) => {
        setStep(2)
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
        }
        const { clientSecret } = await getClientSecret()
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })
        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message)
            dispatch(paymentFailed(result.error.message))
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === "succeeded") {
                dispatch(paymentSucceeded())
                const subtotal = calculateSubtotal(items)
                dispatch(
                    lastOrder({
                        items,
                        subtotal,
                        total: subtotal + tax + shipping,
                    })
                )
                dispatch(clearCart())
                navigate("/success")
                console.log(result)
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    }
    const spacing = css({ margin: "2rem 0" })
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col className={spacing}>
                    <Stripe />
                </Col>
            </Row>
            <Row justify="end">
                <Col
                    className={css({
                        display: "flex",
                        justifyContent: "flex-end",
                    })}
                >
                    <Button type="submit">Checkout</Button>
                </Col>
            </Row>
        </form>
    )
}

export default Payment
