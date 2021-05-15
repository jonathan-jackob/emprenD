import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"
import {Modal} from "bootstrap"
import {apiCall} from "../../../../../../Helpers/apiCall"
import {toast} from "react-toastify"
import ButtonLoad from "../../../../../ButtonLoad"

const ModalDelete = ({id, openModal, comment, afterDeleteComment}) => {
  const [loader, setLoader] = useState(false)
  const idModal = `deleteComment${id}`
  let myModal

  useEffect(() => {
    myModal = new Modal(document.getElementById(idModal), {
      keyboard: false,
    })
  })

  const deleteComment = () => {
    setLoader(true)
    apiCall({
      url: "comments/" + id,
      method: "delete",
    })
      .then(() => {
        afterDeleteComment()
        toast.success("Comentario eliminado.")
        myModal.hide()
      })
      .finally(() => {
        setLoader(false)
      })
  }

  Modal
  return (
    <div>
      <span
        onClick={() => {
          myModal.show()
        }}
      >
        {openModal}
      </span>

      <div
        className="modal fade"
        id={idModal}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby={`${idModal}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id={`${idModal}Label`}>
                Eliminar comentario
              </h5>
              <span
                className="btn btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FaTimes size={20} />
              </span>
            </div>
            <div className="modal-body">
              <p className="text-danger fs-5">
                ¿Quiere eliminar el siguiente comentario?
              </p>
              <p className="lead fs-6">
                <em>{comment}</em>
              </p>
            </div>
            <div className="modal-footer">
              <ButtonLoad
                type="button"
                className="btn btn-outline-danger"
                text="Eliminar"
                textLoader="Eliminando"
                onClick={deleteComment}
                loader={loader}
              />
              {/* <button
                onClick={deleteComment}
              >
                Eliminar
              </button> */}

              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalDelete.propTypes = {
  id: PropTypes.number.isRequired,
  openModal: PropTypes.node.isRequired,
  comment: PropTypes.string.isRequired,
}

export default ModalDelete
