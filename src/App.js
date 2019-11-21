import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { CssBaseline, Container } from "@material-ui/core"

import Home from "./components/Home"

export default function App() {
  return (
    <BrowserRouter>
        <CssBaseline />
        <Container maxWidth="md" style={{ marginTop: "5vh" }}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
    </BrowserRouter>
  )
}
