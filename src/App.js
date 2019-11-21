import React from "react"
import "./index.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { CssBaseline, Container } from "@material-ui/core"

import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
