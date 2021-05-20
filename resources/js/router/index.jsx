import React from "react"
import {useSelector} from "react-redux"
import {Switch, BrowserRouter} from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import Route from "./Route"

import App from "../views/App"
import Login from "../views/Login"
import Register from "../views/Register"
import Profile from "../views/Profile"
import NotFound from "../views/NotFound"
import SessionState from "./SessionState"
import Home from "../views/Home"

function Router() {
  const auth = useSelector((state) => state.auth)

  return (
    <>
      <SessionState />
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route path="/" exact>
            {auth?.id ? <App /> : <Home />}
          </Route>

          <Route path="/login" redirectWithSession="/" exact>
            <Login />
          </Route>

          <Route path="/register" redirectWithSession="/" exact>
            <Register />
          </Route>

          {/* <Route path="/App" redirectWithoutSession="login" exact>
            <App />
          </Route> */}

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
