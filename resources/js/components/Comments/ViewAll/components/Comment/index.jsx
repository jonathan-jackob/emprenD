import React from "react"
import PropTypes from "prop-types"
import ChangeValues from "../ChangeValues"
import {useSelector} from "react-redux"

/**
 * renderiza el comentario en un recuadro
 *
 * @param {string} body - contenido del comentario
 * @param {object} rest - resto de props se asigna al contenedor del componente
 * @returns
 */
const Comment = ({body, ...rest}) => {
  const auth = useSelector((state) => state.auth)

  return (
    <div {...rest}>
      <div className="comments--content--comment bg-gray-light mb-1 px-2 py-3 position-relative">
        {body}
      </div>
    </div>
  )
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
}

export default Comment
