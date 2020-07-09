import React from "react"
import { Row, Col } from "react-grid-system"
import { useForm, Controller } from "react-hook-form"
import { Input } from "baseui/input"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"

const Payment = ({ setStep }) => {
    const { control, handleSubmit } = useForm()
    const [css] = useStyletron()
    const onSubmit = (data) => {
        console.log(data)
        setStep(2)
    }
    const spacing = css({ margin: "2rem 0" })
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className={spacing}>
                <Col>
                    <Controller
                        as={Input}
                        control={control}
                        name="firstName"
                        defaultValue=""
                        placeholder={"First Name"}
                    />
                </Col>

                <Col>
                    <Controller
                        as={Input}
                        control={control}
                        name="lastName"
                        defaultValue=""
                        placeholder={"Last Name"}
                    />
                </Col>
            </Row>
            <Row className={spacing}>
                <Col>
                    <Controller
                        as={Input}
                        control={control}
                        name="address"
                        defaultValue=""
                        placeholder={"Address"}
                    />
                </Col>
            </Row>

            <Row justify="end">
                <Col>
                    <Button
                        kind="secondary"
                        type="button"
                        onClick={() => setStep(1)}
                    >
                        Go Back
                    </Button>
                </Col>
                <Col
                    className={css({
                        display: "flex",
                        justifyContent: "flex-end",
                    })}
                >
                    <Button type="submit">Save And Submit</Button>
                </Col>
            </Row>
        </form>
    )
}

export default Payment
