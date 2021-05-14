import React, {useEffect} from "react"
import {FaUser} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux"
import {getComments} from "../../../Redux/actions/Comments"
import Pagination from "./components/Pagination"

const CommentsViewAll = () => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments)

  useEffect(() => {
    const first = comments?.links?.first || undefined
    dispatch(
      getComments({
        url: first,
        ended: () => {},
      })
    )
  }, [])

  const dateFormat = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-MX")
  }

  return (
    <>
      {comments?.data?.length > 0 && (
        <section
          className="container bg-dark p-3 fs-6 fs-md-5 fs-lg-4"
          id="comments"
        >
          {comments.data.map((comment, index) => (
            <div className="row py-2 px-md-5" key={index}>
              <div className="col-12 col-sm-3 col-md-2 p-2 d-flex justify-content-center justify-content-sm-end align-items-center">
                <FaUser
                  className="text-secondary bg-gray-light p-2 rounded-circle block"
                  size={60}
                />
              </div>
              <div className="col-12 col-sm-8 col-md-9">
                <p className="bg-gray-light mb-1 px-2 py-3">{comment.body}</p>
              </div>
              <div className="col-12 col-sm-11 text-gray-light text-end">
                {dateFormat(comment.updated_at)} - {comment.user_id}
              </div>
            </div>
          ))}

          <Pagination links={comments.links} />
        </section>
      )}
    </>
  )
}

export default CommentsViewAll
