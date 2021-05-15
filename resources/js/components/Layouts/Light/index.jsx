import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import SetTitle from "../components/SetTitle"

/**
 * genera un template básico, fondo claro
 *
 * @param {string} title - titulo que aparece en la pestaña del navegador
 * @param {element} children - contenido del componente
 */
const Light = ({title, children}) => {
  return (
    <>
      <SetTitle title={title} />
      <Header />
      <div className="min-h-screen bg-gray-light py-5">
        <div className="container max-w-800 pt-4">{children}</div>
      </div>
    </>
  )
}

Light.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Light
