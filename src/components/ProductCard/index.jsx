import React from "react"
import { Card, StyledAction } from "baseui/card"
import { Button } from "baseui/button"
import { HeadingSmall, HeadingMedium } from "baseui/typography"
import { useStyletron } from "baseui"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ data, productsStoreName }) => {
    const [css, theme] = useStyletron()
    const navigate = useNavigate()

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
                        height: "18rem",
                        minWidth: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                    },
                    onClick: () =>
                        navigate(`/${productsStoreName}/${data?.id}`, {
                            state: { product: "3", id: "3" },
                        }),
                }}
            >
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        position: "absolute",
                        top: "0",
                        padding: "1rem",
                        left: 0,
                        right: 0,
                    })}
                >
                    <div>
                        <HeadingSmall
                            $style={{
                                margin: "0",
                                color: theme.colors.primary600,
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
                        onClick={() => console.log("Not hello")}
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
