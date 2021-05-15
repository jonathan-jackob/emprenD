import React from "react"
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
      <FaCompass className="text-secondary" size={size} /> emprenD
    </div>
  )
}

export default Logo
