import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {getComments} from "../../../../../Redux/actions/Comments"

const Pagination = ({links}) => {
  const dispatch = useDispatch()
  const paginate = (link) => {
    dispatch(
      getComments({
        url: link,
        ended: () => {
          const coment = document.querySelector("section#comments").offsetTop

          window.scroll({
            top: coment - 70,
            behavior: "smooth",
          })
        },
      })
    )
  }
  return (
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

        <div className="col-6 col-sm-3 text-center mb-2 mb-sm-0">
          <button
            className="btn btn-secondary text-white w-100"
            onClick={() => {
              paginate(links.next)
            }}
            disabled={!links.next}
          >
            Anteriores
          </button>
        </div>

        <div className="col-6 col-sm-3 text-center mb-2 mb-sm-0">
          <button
            className="btn btn-secondary text-white w-100"
            onClick={() => {
              paginate(links.prev)
            }}
            disabled={!links.prev}
          >
            Siguientes
          </button>
        </div>

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
  )
}

Pagination.propTypes = {
  links: PropTypes.object,
}

export default Pagination
