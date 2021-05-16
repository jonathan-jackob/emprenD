import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Tooltip} from "bootstrap"
import {FaEdit, FaTrash} from "react-icons/fa"
import ModalDelete from "./components/ModalDelete"
import ModalEdit from "./components/ModalEdit"

/**
 * componente que renderiza las opciones de eliminar y editar comentario
 *
 * @param {number} comment_id - id del comentario
 * @param {string} comment - comentario
 * @param {Function} afterChangeComments - callback se ejecuta después de editar o eliminar un comentario
 * @param {object} rest - resto de propiedades, se agregan al contenedor
 * @returns
 */
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

      <ModalEdit
        id={comment_id}
        comment={comment}
        afterEditComment={afterChangeComments}
        openModal={
          <button
            className="btn text-warning p-1 no-outline"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Editar comentario"
          >
            <FaEdit size={25} className="" />
          </button>
        }
      />
    </div>
  )
}

ChangeValues.propTypes = {
  comment_id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  afterChangeComments: PropTypes.func,
}

export default ChangeValues
