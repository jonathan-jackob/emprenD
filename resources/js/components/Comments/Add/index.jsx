import React from "react"
import PropTypes from "prop-types"
import Title from "../../Title"
import CommentForm from "./components/CommentForm"

/**
 * contenedor con titulo
 * y componete para agregar comentarios
 *
 * @param {function} afterAddComment - acción que queremos ejecutar después de agregar un comentario
 */
const CommentAdd = ({afterAddComment}) => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6">
          <Title value="COMPARTE TU IDEA" />
        </div>

        <CommentForm
          className="mt-3 col-12"
          afterAddComment={afterAddComment}
        />
      </div>
    </div>
  )
}
CommentAdd.propTypes = {
  afterAddComment: PropTypes.func.isRequired,
}

export default CommentAdd
