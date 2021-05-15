import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Tooltip} from "bootstrap"
import {FaEdit, FaTrash} from "react-icons/fa"
import ModalDelete from "./components/ModalDelete"

const ChangeValues = ({comment_id, comment, afterChangeComments, ...rest}) => {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    )
    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new Tooltip(tooltipTriggerEl)
    })
  }, [])

  return (
    <div {...rest}>
      <ModalDelete
        id={comment_id}
        comment={comment}
        afterDeleteComment={afterChangeComments}
        openModal={
          <button
            className="btn text-danger p-1 no-outline"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Eliminar comentarios"
          >
            <FaTrash size={25} className="" />
          </button>
        }
      />

      <button
        className="btn text-warning p-1 no-outline"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Editar comentario"
      >
        <FaEdit size={25} className="" />
      </button>
    </div>
  )
}

ChangeValues.propTypes = {}

export default ChangeValues
