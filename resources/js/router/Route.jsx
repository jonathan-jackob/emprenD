import React from "react"
import PropTypes from "prop-types"
import {useSelector} from "react-redux"
import {Route as RRoute, Redirect} from "react-router-dom"
import axios from "axios"

const Route = ({
  children,
  redirectWithoutSession,
  redirectWithSession,
  ...rest
}) => {
  const auth = useSelector((state) => state.auth)

  const token = auth?.api_token

  if (token) {
    //
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  const renderRoute = ({location}) => {
    if (!rest.path) return children

    if (redirectWithoutSession && !token) {
      return (
        <Redirect
          to={{pathname: redirectWithoutSession, state: {from: location}}}
        />
      )
    } else if (redirectWithSession && token) {
      return (
        <Redirect
          to={{pathname: redirectWithSession, state: {from: location}}}
        />
      )
    } else {
      return children
    }
  }

  return <RRoute render={renderRoute} {...rest} />
}

Route.propTypes = {
  children: PropTypes.element,
  redirectWithoutSession: PropTypes.string,
  redirectWithSession: PropTypes.string,
}

export default Route
