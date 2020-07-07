import React from "react"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { Link } from "react-router-dom"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"

const DesktopNav = ({ navData }) => {
    const [css] = useStyletron()
    const linkStyles = css({
        textDecoration: "none",
        ":visited": {
            color: "inherit",
        },
    })
    return (
        <FlexGrid
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            $style={{ flexWrap: "nowrap" }}
        >
            {navData.map((navItem) => (
                <FlexGridItem key={navItem.id}>
                    <Link className={linkStyles} to={navItem.link}>
                        <Button kind="minimal">{navItem.name}</Button>
                    </Link>
                </FlexGridItem>
            ))}
        </FlexGrid>
    )
}

export default DesktopNav
