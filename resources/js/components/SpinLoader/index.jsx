import React from "react"

/**
 * muestra un loader pequeño
 */
const SpinLoader = () => {
  return (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default SpinLoader
