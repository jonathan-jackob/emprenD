import React from "react"
import CommentForm from "./components/CommentForm"

const CommentAdd = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 fs-2">
          <h1 className=" font-weight-bold border-bottom border-secondary d-inline pr-5">
            COMPARTE TU IDEA
          </h1>
        </div>

        <CommentForm className="mt-4 col-12" />
      </div>
    </div>
  )
}

export default CommentAdd
