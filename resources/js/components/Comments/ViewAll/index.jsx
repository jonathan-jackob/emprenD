import React from "react"
import PropTypes from "prop-types"

import Pagination from "./components/Pagination"
import Comment from "./components/Comment"
import ContentDate from "./components/ContentDate"
import {FaUser} from "react-icons/fa"

/**
 * rederiza los comentarios
 *
 * @param {array} data - estructura donde se reciben los comentarios
 * @param {object} links - se esperan los links para generar la paginación
 * @param {bool} changeValues - si desea habilitar la edición o eliminación de mensajes
 * @returns
 */
const CommentsViewAll = ({data, links, changeValues}) => {
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
                className="col-12 col-sm-8 col-md-9"
                body={comment.body}
                changeValues={changeValues}
              />

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
  changeValues: false,
}

CommentsViewAll.propTypes = {
  data: PropTypes.array,
  links: PropTypes.object,
  changeValues: PropTypes.bool,
}

export default CommentsViewAll
