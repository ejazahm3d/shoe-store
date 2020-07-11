import React, { useState } from "react"
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem,
} from "baseui/header-navigation"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { MdShoppingCart, MdDone } from "react-icons/md"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import useBreakpoint from "../../../hooks/useBreakpoint"
import { FlexGridItem, FlexGrid } from "baseui/flex-grid"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const navData = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Jackets",
        link: "/jackets",
    },
    {
        id: 3,
        name: "Shoes",
        link: "/shoes",
    },
    {
        id: 4,
        name: "Hoodies",
        link: "/hoodies",
    },
    {
        id: 5,
        name: "Kids",
        link: "/kids",
    },
]

const Navbar = ({ setIsOpen }) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const cartState = useSelector((state) => state.cart)
    const brkPnt = useBreakpoint()
    const lessThanSmXs = brkPnt === "sm" || brkPnt === "xs"

    const [css] = useStyletron()

    return (
        <HeaderNavigation
            className={css({ padding: "0 1rem", maxWidth: "100%" })}
        >
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
            {!lessThanSmXs && (
                <StyledNavigationList $align={ALIGN.left}>
                    <StyledNavigationItem>
                        <Link to="/">
                            <MdDone size="3rem" />
                        </Link>
                    </StyledNavigationItem>
                </StyledNavigationList>
            )}
            <StyledNavigationList $align={ALIGN.center} />
            {!lessThanSmXs && <DesktopNav navData={navData} />}
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <Button onClick={() => setIsOpen(true)} kind="secondary">
                        <MdShoppingCart size="1.5rem" />

                        {cartState.items.length > 0 && (
                            <span>{cartState.items.length}</span>
                        )}
                    </Button>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    )
}

export default Navbar
