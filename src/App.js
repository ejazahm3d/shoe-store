import React from "react"
import Router from "./router"
import Layout from "./components/Layout"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import { LightTheme, BaseProvider } from "baseui"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
const engine = new Styletron()

function App() {
    return (
        <ReduxProvider store={store}>
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <Layout>
                        <Router />
                    </Layout>
                </BaseProvider>
            </StyletronProvider>
        </ReduxProvider>
    )
}

export default App
