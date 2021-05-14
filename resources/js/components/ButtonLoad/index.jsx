import React from "react"
import PropTypes from "prop-types"

const ButtonLoad = ({text, loader, textLoader, ...rest}) => {
  return (
    <button disabled={loader} {...rest}>
      {loader ? (
        <>
          {textLoader && <span>{textLoader}...</span>}
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      ) : (
        <>{text}</>
      )}
    </button>
  )
}
ButtonLoad.propTypes = {
  text: PropTypes.node.isRequired,
  loader: PropTypes.bool,
  textLoader: PropTypes.string,
}

export default ButtonLoad
