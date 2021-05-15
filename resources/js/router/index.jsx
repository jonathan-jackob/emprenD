import React from "react"
import {Switch, BrowserRouter} from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import Route from "./Route"

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Profile from "../views/Profile"
import NotFound from "../views/NotFound"
import SessionState from "./SessionState"

function Router() {
  return (
    <>
      <SessionState />
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route path="/login" redirectWithSession="/" exact>
            <Login />
          </Route>

          <Route path="/register" redirectWithSession="/" exact>
            <Register />
          </Route>

          <Route path="/" redirectWithoutSession="login" exact>
            <Home />
          </Route>

          <Route path="/profile" redirectWithoutSession="/login" exact>
            <Profile />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router
