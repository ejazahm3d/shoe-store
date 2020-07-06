import React from "react";
import Router from "./router";
import Layout from "./components/Layout";
import theme from "./theme";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Layout>
          <Router />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
