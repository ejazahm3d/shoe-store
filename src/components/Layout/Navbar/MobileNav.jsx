import React from "react"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { Link } from "react-router-dom"
import { Drawer, SIZE, ANCHOR } from "baseui/drawer"
import { MdMenu } from "react-icons/md"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"

const DesktopNav = ({ navData, isNavOpen, setIsNavOpen }) => {
    const [css] = useStyletron()
    const linkStyles = css({
        textDecoration: "none",
        ":visited": {
            color: "inherit",
        },
    })

    return (
        <>
            <Button kind="secondary" onClick={() => setIsNavOpen(true)}>
                <MdMenu size="1.5rem" />
            </Button>
            <Drawer
                isOpen={isNavOpen}
                renderAll
                onClose={() => setIsNavOpen(false)}
                size={SIZE.default}
                anchor={ANCHOR.left}
            >
                <FlexGrid flexDirection="column" justifyContent="flex-start">
                    {navData.map((navItem) => (
                        <FlexGridItem key={navItem.id}>
                            <Link
                                className={linkStyles}
                                to={navItem.link}
                                onClick={() => setIsNavOpen(false)}
                            >
                                <Button size="large" kind="minimal">
                                    {navItem.name}
                                </Button>
                            </Link>
                        </FlexGridItem>
                    ))}
                </FlexGrid>
            </Drawer>
        </>
    )
}

export default DesktopNav
