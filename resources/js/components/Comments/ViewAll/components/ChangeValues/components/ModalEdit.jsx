import React, {useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"
import {Modal} from "bootstrap"
import {toast} from "react-toastify"

import {apiCall} from "../../../../../../Helpers/apiCall"
import ButtonLoad from "../../../../../ButtonLoad"
import BootstrapModal from "../../../../../Modal"
import {useForm} from "react-hook-form"

const ModalEdit = ({id, openModal, comment, afterEditComment}) => {
  const btnSubmit = useRef()
  const [loader, setLoader] = useState(false)
  const idModal = `editComment${id}`
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      body: comment,
    },
  })

  let myModal

  useEffect(() => {
    myModal = new Modal(document.getElementById(idModal), {
      keyboard: false,
    })
  })

  const onSubmit = (data) => {
    setLoader(true)

    apiCall({
      url: "comments/" + id,
      method: "put",
      data,
    })
      .then(() => {
        afterEditComment()
        toast.success("Comentario Modificado.")
      })
      .finally(() => {
        setLoader(false)
      })
  }

  const sendForm = () => {
    btnSubmit.current.click()
  }

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
        title="Modificar comentario"
        body={
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-danger fs-5">Comentario</p>
            <div>
              <textarea
                className={`comment-add-textarea form-control ${
                  errors?.body?.message ? "is-invalid" : ""
                }`}
                placeholder="Mi idea es..."
                rows="6"
                {...register("body", {
                  required: {value: true, message: "Compártenos tu idea"},
                })}
              ></textarea>

              <div className="form-text text-danger text-end">
                {errors?.body?.message}
              </div>
              <button className="d-none" type="submit" ref={btnSubmit}></button>
            </div>
          </form>
        }
        footer={
          <>
            <ButtonLoad
              type="button"
              className="btn btn-outline-danger"
              text="Modificar"
              textLoader="Modificando"
              onClick={sendForm}
              loader={loader}
            />

            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </>
        }
      />
    </div>
  )
}

ModalEdit.propTypes = {
  id: PropTypes.number.isRequired,
  openModal: PropTypes.node.isRequired,
  comment: PropTypes.string.isRequired,
}

export default ModalEdit
