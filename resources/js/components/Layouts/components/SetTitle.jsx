import React, {useEffect} from "react"
import PropTypes from "prop-types"

const SetTitle = ({title}) => {
  useEffect(() => {
    document.title = title || process.env.MIX_APP_NAME
  }, [])
  return null
}

SetTitle.propTypes = {
  title: PropTypes.string,
}

export default SetTitle
