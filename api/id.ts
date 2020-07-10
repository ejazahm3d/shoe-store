import { NowRequest, NowResponse } from "@vercel/node"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: "2020-03-02",
})

const allowCors = (fn) => async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", true)
    res.setHeader("Access-Control-Allow-Origin", "*")
    // another option
    // res.setHeader('Access-Control-Allow-Origin', req.header.origin);
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    )
    if (req.method === "OPTIONS") {
        res.status(200).end()
        return
    }

    return await fn(req, res)
}

const handler = async (req: NowRequest, res: NowResponse) => {
    const { amount } = req.body
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: "accept_a_payment" },
    })

    res.json({ client_secret: paymentIntent.client_secret })
}

export default allowCors(handler)
