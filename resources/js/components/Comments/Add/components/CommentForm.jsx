import React, {useState} from "react"
import PropTypes from "prop-types"
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import {FaArrowRight} from "react-icons/fa"

import {apiCall} from "../../../../Helpers/apiCall"
import {getComments} from "../../../../Redux/actions/Comments"
import ButtonLoad from "../../../ButtonLoad"
import {toast} from "react-toastify"

const CommentForm = ({className}) => {
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm()

  const onSubmit = (data) => {
    setLoader(true)
    console.log(data)

    apiCall({
      url: "comments",
      method: "post",
      data,
    })
      .then(() => {
        dispatch(getComments({url: "comments"}))
        reset()
        toast.success("Idea compartida, gracias por compartir.", {
          autoClose: 5000,
        })
      })
      .finally(() => {
        setLoader(false)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
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
  className: PropTypes.string,
}

export default CommentForm
