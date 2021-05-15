import React from "react"
import PropTypes from "prop-types"
import SpinLoader from "../SpinLoader"

/**
 * botón para mostrar que se esta procesando una acción
 *
 * @param {string} text - texto que muestra el botón
 * @param {boolean} loader - bandera que muestra el loader en el botón
 * @param {string} textLoader - texto que se muestra junto con el loader (opcional)
 * @param {object} rest - es el resto de props recibidos los cuales se asignan al botón
 * @returns elemento button
 */
const ButtonLoad = ({text, loader, textLoader, ...rest}) => {
  return (
    <button disabled={loader} {...rest}>
      {loader ? (
        <>
          {textLoader && <span>{textLoader}...</span>}
          <SpinLoader />
        </>
      ) : (
        <>{text}</>
      )}
    </button>
  )
}

ButtonLoad.defaultProps = {
  loader: false,
  textLoader: undefined,
}

ButtonLoad.propTypes = {
  text: PropTypes.node.isRequired,
  loader: PropTypes.bool,
  textLoader: PropTypes.string,
}

export default ButtonLoad
