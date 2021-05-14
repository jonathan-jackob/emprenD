import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import SetTitle from "../components/SetTitle"

const Light = ({children, title}) => {
  return (
    <>
      <SetTitle title={title} />
      <Header />
      <div className="min-h-screen bg-gray-light py-5 mt-4">
        <div className="container max-w-800">{children}</div>
      </div>
    </>
  )
}

Light.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Light
