import React from "react"
import PropTypes from "prop-types"
import {useSelector} from "react-redux"
import {Route as RRoute, Redirect} from "react-router-dom"

/**
 * define que lo que se renderiza según parametros recibidos
 *
 * @param {node} children - lo que se renderiza en la ruta asignada
 * @param {string} redirectWithoutSession - ruta a redireccionar si el usuario no tiene sesión
 * @param {string} redirectWithSession - ruta a redireccionar si el usuario tiene sesión
 */
const Route = ({
  children,
  redirectWithoutSession,
  redirectWithSession,
  ...rest
}) => {
  //obtiene el token de la sesion
  const auth = useSelector((state) => state.auth)
  const token = auth?.api_token

  const renderRoute = ({location}) => {
    if (!rest.path) return children

    if (redirectWithoutSession && !token) {
      //si necesita sesión y no la tiene - redirecciona a la ruta recibida
      return (
        <Redirect
          to={{pathname: redirectWithoutSession, state: {from: location}}}
        />
      )
    } else if (redirectWithSession && token) {
      //si no necesita sesion y la tiene -
      return (
        <Redirect
          to={{pathname: redirectWithSession, state: {from: location}}}
        />
      )
    } else {
      //si no se recibió ninguna opción de redireccionamiento renderiza el contenido
      return children
    }
  }

  return <RRoute render={renderRoute} {...rest} />
}

Route.propTypes = {
  children: PropTypes.node,
  redirectWithoutSession: PropTypes.string,
  redirectWithSession: PropTypes.string,
}

export default Route
