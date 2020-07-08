import React from "react"
import { Card, StyledAction } from "baseui/card"
import { Button } from "baseui/button"
import { HeadingSmall } from "baseui/typography"

const ProductCard = ({ data }) => {
    return (
        <div>
            <Card
                overrides={{
                    Root: { style: { width: "100%", height: "100%" } },
                }}
                title={data?.name}
                headerImage={{
                    src: data?.images?.[0],
                    style: {
                        height: "18rem",
                        minWidth: "100%",
                        objectFit: "cover",
                    },
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <HeadingSmall
                        overrides={{
                            Block: { style: { margin: "0 0 0.5rem 0" } },
                        }}
                    >
                        Price
                    </HeadingSmall>
                    <HeadingSmall
                        overrides={{
                            Block: { style: { margin: "0 0 0.5rem 0" } },
                        }}
                    >
                        {data?.price}
                    </HeadingSmall>
                </div>
                <StyledAction>
                    <Button
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
