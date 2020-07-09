import React from "react"
import { HeadingXSmall } from "baseui/typography"
import { Container, Row } from "react-grid-system"
import { useStyletron } from "baseui"

const CheckoutLayout = ({ children, title, showContent, invert = false }) => {
    const [css, theme] = useStyletron()

    return (
        <Container>
            <Row
                className={css({
                    background: invert
                        ? theme.colors.contentInverseSecondary
                        : theme.colors.primaryA,
                })}
            >
                <HeadingXSmall
                    margin="0"
                    padding="1rem 2rem"
                    color={
                        invert ? theme.colors.primaryA : theme.colors.primaryB
                    }
                >
                    {title}
                </HeadingXSmall>
            </Row>

            {showContent && children}
        </Container>
    )
}

export default CheckoutLayout
