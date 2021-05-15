import React, {useState} from "react"
import PropTypes from "prop-types"
import {useForm} from "react-hook-form"
import {FaArrowRight} from "react-icons/fa"

import {apiCall} from "../../../../Helpers/apiCall"
import ButtonLoad from "../../../ButtonLoad"
import {toast} from "react-toastify"

/**
 * Componente el cual retorna un textarea en donde puede añadir comentarios el usuario con sesión activa
 *
 * @param {function} actionComment - callback después de agregar comentario correctamente
 * @param {object} props todos los props recibidos se asignan al contenedor del componente
 * @returns
 */
const CommentForm = ({afterAddComment, ...rest}) => {
  const [loader, setLoader] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm()

  const onSubmit = (data) => {
    setLoader(true)

    apiCall({
      url: "comments",
      method: "post",
      data,
    })
      .then(() => {
        // se ejecuta el callback
        afterAddComment()
        //limpia el formulario
        reset()
        // muestra un mensaje de éxito
        toast.success("Tu idea fue compartida, gracias por compartir.", {
          autoClose: 5000,
        })
      })
      .finally(() => {
        setLoader(false)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
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
      </div>

      <div className="text-end mt-3">
        <ButtonLoad
          className="btn btn-secondary text-white"
          text={
            <>
              Compartir <FaArrowRight />
            </>
          }
          loader={loader}
          textLoader="compartiendo"
        />
      </div>
    </form>
  )
}

CommentForm.propTypes = {
  afterAddComment: PropTypes.func.isRequired,
}

export default CommentForm
