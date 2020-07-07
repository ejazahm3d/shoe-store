import React from "react"
import { useStyletron } from "baseui"
import { Display2 } from "baseui/typography"

const Hero = () => {
    const [css, theme] = useStyletron()
    return (
        <div
            className={css({
                width: "100%",
                position: "relative",
            })}
        >
            <Display2
                color="white"
                className={css({
                    textAlign: "center",
                    fontFamily: "mono",
                    position: "absolute",
                    fontWeight: "bold",
                    left: 0,
                    right: 0,
                    bottom: "5%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                })}
            >
                JUST DO IT!
            </Display2>
            <img
                className={css({
                    width: "100%",
                    objectFit: "cover",
                    height: "40rem",
                    objectPosition: "65% 80%",
                })}
                src="/hero-image.jpg"
                alt=""
            />
        </div>
    )
}

export default Hero
