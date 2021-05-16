import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Modal} from "bootstrap"
import {toast} from "react-toastify"
import {apiCall} from "../../../../../../Helpers/apiCall"
import ButtonLoad from "../../../../../ButtonLoad"
import BootstrapModal from "../../../../../Modal"

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

      <BootstrapModal
        idModal={idModal}
        title="Eliminar comentario"
        body={
          <>
            <p className="text-danger fs-5">
              ¿Quiere eliminar el siguiente comentario?
            </p>
            <p className="lead fs-6">
              <em>{comment}</em>
            </p>
          </>
        }
        footer={
          <>
            <ButtonLoad
              type="button"
              className="btn btn-outline-danger"
              text="Eliminar"
              textLoader="Eliminando"
              onClick={deleteComment}
              loader={loader}
            />

            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
          </>
        }
      />
    </div>
  )
}

ModalDelete.propTypes = {
  id: PropTypes.number.isRequired,
  openModal: PropTypes.node.isRequired,
  comment: PropTypes.string.isRequired,
}

export default ModalDelete
