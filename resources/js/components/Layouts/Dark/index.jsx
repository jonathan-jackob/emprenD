import React from "react"
import PropTypes from "prop-types"
import SetTitle from "../components/SetTitle"

/**
 * genera un template básico, fondo obscuro y contenido centrado
 *
 * @param {string} title - titulo que aparece en la pestaña del navegador
 * @param {element} children - contenido del componente
 */
const Dark = ({title, children}) => {
  return (
    <>
      <SetTitle title={title} />
      <div className="min-h-screen bg-dark d-flex justify-content-center align-items-center">
        <div className="container text-gray-light">{children}</div>
      </div>
    </>
  )
}

Dark.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Dark
