import React from "react"
import { Container, Row, Col } from "react-grid-system"
import { useStyletron } from "baseui"
import { HeadingMedium } from "baseui/typography"
import { navData } from "../Navbar"
import { Link } from "react-router-dom"
import { Button } from "baseui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    const [css, theme] = useStyletron()
    const linkStyles = css({
        textDecoration: "none",
        color: theme.colors.primaryB,
        ":visited": {
            color: "inherit",
        },
    })
    const iconStyles = css({
        fontSize: "3rem",
    })
    const spacing = css({ marginTop: "1rem" })
    const textCenter = css({ textAlign: "center" })
    const padding = css({ padding: "1rem" })

    return (
        <div
            className={css({
                marginTop: "8rem",
                padding: "4rem 3rem 2rem 3rem",
                background: theme.colors.primaryA,
                color: theme.colors.primaryB,
            })}
        >
            <Container>
                <Row justify="center" className={spacing}>
                    <HeadingMedium
                        margin="0"
                        color={theme.colors.primaryB}
                        className={textCenter}
                    >
                        Contact Me
                    </HeadingMedium>
                </Row>
                <Row justify="around" className={spacing}>
                    <div
                        className={css({
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                        })}
                    >
                        <a
                            className={`${spacing} ${textCenter} ${linkStyles} ${padding}`}
                            href="https://www.github.com/ejazahm3d"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className={iconStyles} />
                        </a>
                        <a
                            className={`${spacing} ${textCenter} ${linkStyles} ${padding}`}
                            href="https://www.linkedin.com/in/ejazahm3d"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className={iconStyles} />
                        </a>
                    </div>
                </Row>
                <Row justify="center" align="center" className={spacing}>
                    <div
                        className={css({
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        })}
                    >
                        {navData.map((navItem) => (
                            <Col key={navItem.id}>
                                <Link className={linkStyles} to={navItem.link}>
                                    <Button
                                        overrides={{
                                            BaseButton: {
                                                style: {
                                                    color:
                                                        theme.colors.primaryB,
                                                    ":hover": {
                                                        color:
                                                            theme.colors
                                                                .primaryA,
                                                    },
                                                },
                                            },
                                        }}
                                        size="default"
                                        kind="tertiary"
                                    >
                                        {navItem.name}
                                    </Button>
                                </Link>
                            </Col>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
