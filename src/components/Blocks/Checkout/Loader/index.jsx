import React from "react"
import { useStyletron } from "baseui"
import { Spinner } from "baseui/spinner"

const Loader = () => {
    const [css] = useStyletron()
    return (
        <div
            className={css({
                background: "rgb(0,0,0,0.2)",
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            })}
        >
            <div
                className={css({
                    position: "absolute",
                    top: "50%",
                    // bottom: 0,
                    left: "50%",
                    // right: 0,
                })}
            >
                <Spinner size={undefined} color={undefined} />
            </div>
        </div>
    )
}

export default Loader
