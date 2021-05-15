import React from "react"
import PropTypes from "prop-types"

import Pagination from "./components/Pagination"
import Comment from "./components/Comment"
import ContentDate from "./components/ContentDate"
import {FaUser} from "react-icons/fa"
import ChangeValues from "./components/ChangeValues"
import {useSelector} from "react-redux"

/**
 * rederiza los comentarios
 *
 * @param {array} data - estructura donde se reciben los comentarios
 * @param {object} links - se esperan los links para generar la paginación
 * @param {bool} optionsComment - si desea habilitar la edición o eliminación de mensajes
 * @returns
 */
const CommentsViewAll = ({
  data,
  links,
  optionsComment,
  afterChangeComments,
}) => {
  const auth = useSelector((state) => state.auth)

  return (
    <>
      {data?.length > 0 && (
        <section
          className="container bg-dark p-3 fs-6 fs-md-5 fs-lg-4"
          id="comments"
        >
          {data.map((comment, index) => (
            <div className="row py-2 px-md-5" key={index}>
              <div className="col-12 col-sm-3 col-md-2 p-2 d-flex justify-content-center justify-content-sm-end align-items-center">
                <FaUser
                  className="text-secondary bg-gray-light p-2 rounded-circle block"
                  size={60}
                />
              </div>

              <Comment
                className="col-12 col-sm-8 col-md-9 "
                body={comment.body}
              />

              {optionsComment && auth.id == comment.user_id && (
                <div className="position-relative col-12 col-sm-1 d-flex flex-sm-column justify-content-end justify-content-sm-center">
                  <ChangeValues
                    className=""
                    comment_id={comment.id}
                    comment={comment.body}
                    afterChangeComments={afterChangeComments}
                  />
                </div>
              )}

              <ContentDate
                className="col-12 col-sm-11 text-gray-light text-end"
                user_id={comment.user_id}
                created_at={comment.updated_at}
              />
            </div>
          ))}

          {links && <Pagination links={links} />}
        </section>
      )}
    </>
  )
}

CommentsViewAll.defaultProps = {
  links: undefined,
  optionsComment: false,
  afterChangeComments: () => {},
}

CommentsViewAll.propTypes = {
  data: PropTypes.array.isRequired,
  links: PropTypes.object,
  optionsComment: PropTypes.bool,
  afterChangeComments: PropTypes.func,
}

export default CommentsViewAll
