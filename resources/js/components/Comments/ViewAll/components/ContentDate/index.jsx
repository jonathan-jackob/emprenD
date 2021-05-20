import React from "react"
import PropTypes from "prop-types"

import GetUser from "./components/GetUser"

/**
 * genera una fecha formateada e imprime el id del usuario
 *
 * @param {number} user_id - id del usuario (debe de ser el nombre)
 * @param {string} created_at - fecha de creación del comentario
 */
const ContentDate = ({user_id, created_at, ...rest}) => {
  const dateFormat = (dateString) => {
    const date = new Date(dateString)

    // retorna una fecha formateada dd/mm/yy hh:mm:ss
    return date.toLocaleDateString("es-MX", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

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
