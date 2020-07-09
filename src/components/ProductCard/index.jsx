import React from "react"
import { Card, StyledAction } from "baseui/card"
import { Button } from "baseui/button"
import { HeadingSmall, HeadingMedium } from "baseui/typography"
import { useStyletron } from "baseui"
import { useNavigate } from "react-router-dom"
import useBreakpoint from "../../hooks/useBreakpoint"
import { addToCart } from "../../store/actions"
import { useDispatch } from "react-redux"

const ProductCard = ({ data, productsCategoryName }) => {
    const dispatch = useDispatch()
    const [css, theme] = useStyletron()
    const navigate = useNavigate()
    const breakPoint = useBreakpoint()
    const smXs = breakPoint === "sm" || breakPoint === "xs"

    return (
        <div>
            <Card
                overrides={{
                    Root: {
                        style: {
                            position: "relative",
                        },
                    },
                }}
                headerImage={{
                    src: data?.images?.[0],
                    style: {
                        height: `${smXs ? "" : ""}`,
                        minWidth: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                    },
                    onClick: () =>
                        navigate(`/${productsCategoryName}/${data?.id}`),
                }}
            >
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        position: "absolute",
                        bottom: "7rem",
                        padding: "1rem",
                        backgroundColor: theme.colors.primary50,
                        left: 0,
                        right: 0,
                    })}
                >
                    <div>
                        <HeadingSmall
                            $style={{
                                margin: "0",

                                color: theme.colors.primary700,
                            }}
                        >
                            {data?.name}
                        </HeadingSmall>
                    </div>
                    <div>
                        <HeadingMedium
                            $style={{
                                margin: "0",
                                color: theme.colors.primary600,
                            }}
                        >
                            {data?.price}
                        </HeadingMedium>
                    </div>
                </div>

                <StyledAction style={{ margin: "2rem 0rem" }}>
                    <Button
                        onClick={() => {
                            console.log("teehee")
                            dispatch(addToCart({ qty: 1, ...data }))
                        }}
                        overrides={{
                            BaseButton: { style: { width: "100%" } },
                        }}
                    >
                        Add to Cart
                    </Button>
                </StyledAction>
            </Card>
        </div>
    )
}

export default ProductCard
