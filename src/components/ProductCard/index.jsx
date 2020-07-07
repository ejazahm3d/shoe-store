import React from "react"
import { Card, StyledAction } from "baseui/card"
import { Button } from "baseui/button"
const ProductCard = ({ data }) => {
    return (
        <div>
            <Card
                overrides={{ Root: { style: { width: "100%" } } }}
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
