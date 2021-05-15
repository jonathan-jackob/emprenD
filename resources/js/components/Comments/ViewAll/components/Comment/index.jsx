import React from "react"
import PropTypes from "prop-types"
import ChangeValues from "../ChangeValues"

/**
 * renderiza el comentario en un recuadro
 *
 * @param {string} body - contenido del comentario
 * @param {object} rest - resto de props se asigna al contenedor del componente
 * @returns
 */
const Comment = ({body, changeValues, ...rest}) => {
  return (
    <div {...rest}>
      <div className="comments--content--comment bg-gray-light mb-1 px-2 py-3 position-relative">
        {body}
        {/* <ChangeValues className="position-absolute bottom-0 end-0" /> */}
      </div>
    </div>
  )
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  changeValues: PropTypes.bool,
}

export default Comment
