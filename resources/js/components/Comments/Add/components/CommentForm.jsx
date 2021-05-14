import React from "react"
import PropTypes from "prop-types"
import {useForm} from "react-hook-form"

const CommentForm = ({className}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div>
        <textarea
          className={`comment-add-textarea form-control ${
            errors?.comment?.message ? "is-invalid" : ""
          }`}
          placeholder="Mi idea es..."
          rows="6"
          {...register("comment", {required: true})}
        ></textarea>

        <div>{errors?.comment?.message}</div>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-secondary text-white">Compartir </button>
      </div>
    </form>
  )
}

CommentForm.propTypes = {
  className: PropTypes.string,
}

export default CommentForm
