import React from "react"
import PropTypes from "prop-types"
import {FaCompass} from "react-icons/fa"

/**
 * genera el logo de la aplicación
 *
 * @param {size} number - tamaño del icono
 * @param {object} rest - el resto de props recibidos se agregan al contenedor
 * @returns
 */

const Logo = ({size, ...rest}) => {
  return (
    <div {...rest}>
      {size > 0 && (
        <>
          <FaCompass className="text-secondary" size={size} /> emprenD
        </>
      )}
    </div>
  )
}

Logo.defaultProps = {
  size: 0,
}

Logo.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Logo
