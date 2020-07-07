import React from "react"
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem,
} from "baseui/header-navigation"
import { StyledLink } from "baseui/link"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"

const Navbar = ({ setIsOpen }) => {
    const [css, theme] = useStyletron()
    return (
        <HeaderNavigation className={css({ padding: "0 1rem" })}>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                    <Link to="/">
                        <StyledLink animateUnderline={true}>Home</StyledLink>
                    </Link>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                    <Link to="/shoe">Shoes</Link>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="#basic-link2">Tab Link Two</StyledLink>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <Button
                        $style={{ backgroundColor: theme.colors.accent }}
                        onClick={() => setIsOpen(true)}
                        kind="primary"
                        shape="round"
                    >
                        <MdShoppingCart size="1.3rem" />
                    </Button>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    )
}

export default Navbar
