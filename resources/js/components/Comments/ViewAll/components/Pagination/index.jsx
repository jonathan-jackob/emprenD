import PropTypes from "prop-types"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {getCommentsPaginate} from "../../../../../Redux/actions/Comments"
import SpinLoader from "../../../../SpinLoader"

/**
 * genera una semi-paginación de los comentarios
 *
 * @param {object} links -
 */
const Pagination = ({links}) => {
  const dispatch = useDispatch()
  const [loaderPrev, setLoaderPrev] = useState(false)
  const [loaderNext, setLoaderNext] = useState(false)

  const paginate = (link) => {
    dispatch(
      getCommentsPaginate({
        url: link,
        success: () => {
          const coment = document.querySelector("section#comments").offsetTop

          //   window.scroll({
          //     top: coment - 70,
          //     behavior: "smooth",
          //   })
        },
        ended: () => {
          setLoaderNext(false)
          setLoaderPrev(false)
        },
      })
    )
  }

  return (
    <>
      (
      <div className="container pt-2">
        <div className="row justify-content-between">
          {/* <div className="col-6 col-sm-3 text-center mb-2 mb-sm-0">
          <button
            className="btn btn-secondary text-white w-100"
            onClick={() => {
              paginate(links.last)
            }}
          >
            Mas antiguos
          </button>
        </div> */}

          {links.next && (
            <div className="col-6 col-sm-3 text-center mb-2 mb-sm-0">
              <button
                className="btn btn-secondary text-white w-100"
                onClick={() => {
                  setLoaderNext(true)
                  paginate(links.next)
                }}
                disabled={!links.next || loaderNext || loaderPrev}
              >
                Anteriores
                {loaderNext && <SpinLoader />}
              </button>
            </div>
          )}

          {links.prev && (
            <div className="col-6 col-sm-3 text-center mb-2 mb-sm-0">
              <button
                className="btn btn-secondary text-white w-100"
                onClick={() => {
                  setLoaderPrev(true)
                  paginate(links.prev)
                }}
                disabled={!links.prev || loaderNext || loaderPrev}
              >
                Recientes
                {loaderPrev && <SpinLoader />}
              </button>
            </div>
          )}

          {/* <div className="col-6 col-sm-3 text-center mb-2 mb-sm-0">
          <button
            className="btn btn-secondary text-white w-100"
            onClick={() => {
              paginate(links.first)
            }}
          >
            Mas recientes
          </button>
        </div> */}
        </div>
      </div>
    </>
  )
}

Pagination.propTypes = {
  links: PropTypes.object,
}

export default Pagination
