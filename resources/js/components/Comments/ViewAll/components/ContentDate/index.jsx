import React from "react"
import PropTypes from "prop-types"

import GetUser from "./components/GetUser"
import {dateFormat} from "./helpers/dateFormat"

/**
 * genera una fecha formateada e imprime el id del usuario
 *
 * @param {number} user_id - id del usuario (debe de ser el nombre)
 * @param {string} created_at - fecha de creación del comentario
 */
const ContentDate = ({user_id, created_at, ...rest}) => {
  return (
    <div {...rest}>
      {dateFormat(created_at)} - <GetUser id={user_id} />
    </div>
  )
}

ContentDate.propTypes = {
  user_id: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
}

export default ContentDate
