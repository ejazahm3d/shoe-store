import { useState, useEffect } from "react"
import throttle from "lodash.throttle"

const getDeviceConfig = (width) => {
    if (width < 320) {
        return "xs"
    } else if (width >= 320 && width < 720) {
        return "sm"
    } else if (width >= 720 && width < 1024) {
        return "md"
    } else if (width >= 1024) {
        return "lg"
    }
}

const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() =>
        getDeviceConfig(window.innerWidth)
    )

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setBrkPnt(getDeviceConfig(window.innerWidth))
        }, 200)
        window.addEventListener("resize", calcInnerWidth)
        return () => window.removeEventListener("resize", calcInnerWidth)
    }, [])

    return brkPnt
}
export default useBreakpoint
