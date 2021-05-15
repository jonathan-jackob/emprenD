import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Tooltip} from "bootstrap"
import {FaEdit, FaTrash} from "react-icons/fa"

const ChangeValues = (props) => {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    )
    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new Tooltip(tooltipTriggerEl)
    })
  }, [])
  return (
    <div {...props}>
      <FaTrash
        size={25}
        className="text-danger cursor-pointer"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Eliminar comentarios"
      />
      <FaEdit
        size={28}
        className="text-warning cursor-pointer"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Editar comentario"
      />
    </div>
  )
}

ChangeValues.propTypes = {}

export default ChangeValues
