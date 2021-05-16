import React from "react"
import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"

const Modal = ({idModal, title, body, footer}) => {
  return (
    <div
      className="modal fade"
      id={idModal}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby={`${idModal}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title" id={`${idModal}Label`}>
              {title}
            </h5>
            <span
              className="btn btn-close text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </span>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  idModal: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node,
  footer: PropTypes.node,
}

export default Modal
