import React from "react"
import {Switch, BrowserRouter} from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import Route from "./Route"

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" redirectWithoutSession="login" exact>
          <Home />
        </Route>

        <Route path="/login" redirectWithSession="/" exact>
          <Login />
        </Route>

        <Route path="/register" redirectWithSession="/" exact>
          <Register />
        </Route>

        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
