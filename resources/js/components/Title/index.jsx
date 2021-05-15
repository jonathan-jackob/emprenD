import React from "react"
import PropTypes from "prop-types"

/**
 * genera una estructura de un titulo con una etiqueta h1
 * con un borde en inferior
 *
 * @param {string} value
 */
const Title = ({value}) => {
  return (
    <h1 className="font-weight-bold border-bottom border-secondary border-2">
      {value}
    </h1>
  )
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Title
