import React, {useRef} from "react"
import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"

export const OpenModal = ({value}) => {
  return (
    <span
      type="button"
      className="d-none"
      data-bs-toggle="modal"
      data-bs-target="#ModalConfirm"
      ref={refModal}
    >
      {value}
    </span>
  )
}

const ModalConfirm = ({title, body, confirmButton, cancelButton}) => {
  return (
    <div>
      <div
        className="modal fade"
        id="ModalConfirm"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="ModalConfirmLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalConfirmLabel">
                {title}
              </h5>
              <span type="button" data-bs-dismiss="modal" aria-label="Close">
                <FaTimes size={20} />
              </span>
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">
              {confirmButton}
              {cancelButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalConfirm.propTypes = {}

export default ModalConfirm
