import React from "react"
import { useStyletron } from "baseui"

const Hero = () => {
    const [css] = useStyletron()
    return (
        <div
            className={css({
                width: "100%",
                position: "relative",
            })}
        >
            <img
                className={css({
                    width: "100%",
                    objectFit: "cover",
                    height: "40rem",
                })}
                src="/nike-hero.jpg"
                alt=""
            />
        </div>
    )
}

export default Hero
