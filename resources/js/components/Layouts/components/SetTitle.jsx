import React, {useEffect} from "react"
import PropTypes from "prop-types"

/**
 * asigna el titulo a la pestaña del navegador
 * si no se recibe ningún title se asigna el nombre de la aplicación
 * almacenada en el archivo .en
 *
 * @param {string} title
 * @returns
 */
const SetTitle = ({title}) => {
  useEffect(() => {
    document.title = title || process.env.MIX_APP_NAME
  }, [])
  return null
}

SetTitle.propTypes = {
  title: PropTypes.string,
}

export default SetTitle
