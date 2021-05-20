import React from "react"
import PropTypes from "prop-types"
/**
 * renderiza el comentario en un recuadro
 *
 * @param {string} body - contenido del comentario
 * @param {object} rest - resto de props se asigna al contenedor del componente
 * @returns
 */
const Comment = ({body, ...rest}) => {
  return (
    <div {...rest}>
      <p className="comments--content--comment bg-gray-light mb-1 px-2 py-3 position-relative font-italic">
        {body}
      </p>
    </div>
  )
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
}

export default Comment
