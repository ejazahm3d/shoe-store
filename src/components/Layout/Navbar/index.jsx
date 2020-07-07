import React, { useState } from "react"
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem,
} from "baseui/header-navigation"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { MdShoppingCart } from "react-icons/md"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import useBreakpoint from "../../../hooks/useBreakpoint"
import { FlexGridItem, FlexGrid } from "baseui/flex-grid"

const Navbar = ({ setIsOpen }) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const brkPnt = useBreakpoint()
    const lessThanSmXs = brkPnt === "sm" || brkPnt === "xs"
    const navData = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Upcoming",
            link: "/shoe",
        },
        {
            id: 3,
            name: "Latest",
            link: "/shoe",
        },
    ]

    const [css] = useStyletron()

    return (
        <HeaderNavigation className={css({ padding: "0 1rem" })}>
            <FlexGrid justifyContent="center" alignItems="center">
                {lessThanSmXs && (
                    <FlexGridItem>
                        <MobileNav
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                            navData={navData}
                        />
                    </FlexGridItem>
                )}
            </FlexGrid>
            {!lessThanSmXs && <DesktopNav navData={navData} />}
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <Button onClick={() => setIsOpen(true)} kind="secondary">
                        <MdShoppingCart size="1.5rem" />
                    </Button>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    )
}

export default Navbar
