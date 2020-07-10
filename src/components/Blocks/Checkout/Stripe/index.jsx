import React from "react"
import { CardElement } from "@stripe/react-stripe-js"
import { HeadingXSmall } from "baseui/typography"

const Stripe = () => {
    return (
        <>
            <HeadingXSmall margin="0 0 1rem 0">Card details</HeadingXSmall>
            <CardElement
                options={{
                    iconStyle: "solid",

                    hidePostalCode: true,
                    style: {
                        base: {
                            color: "#32325d",
                            fontFamily:
                                '"Helvetica Neue", Helvetica, sans-serif',
                            fontSmoothing: "antialiased",
                            fontSize: "1.5rem",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                            padding: "2rem",
                        },
                        invalid: {
                            color: "#fa755a",
                            iconColor: "#fa755a",
                        },
                    },
                }}
            />
        </>
    )
}

export default Stripe
