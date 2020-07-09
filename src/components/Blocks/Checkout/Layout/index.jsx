import React from "react"
import { HeadingXSmall } from "baseui/typography"
import { Container, Row } from "react-grid-system"
import { useStyletron } from "baseui"

const CheckoutLayout = ({ children, stepName, showContent }) => {
    const [css, theme] = useStyletron()

    return (
        <Container>
            <Row
                className={css({
                    background: theme.colors.primaryA,
                })}
            >
                <HeadingXSmall
                    margin="0"
                    padding="1rem 2rem"
                    color={theme.colors.primaryB}
                >
                    {stepName}
                </HeadingXSmall>
            </Row>

            {showContent && children}
        </Container>
    )
}

export default CheckoutLayout
