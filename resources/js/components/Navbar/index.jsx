import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Logo from "../Logo"

const Navbar = ({children, linkLogo}) => {
  return (
    <>
      <div className="header-container">
        <nav className="navbar navbar-light bg-white fixed-top position-fixed navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to={linkLogo} replace>
              <Logo size={25} className="font-bold fs-4" />
            </Link>
            {children}
          </div>
        </nav>
        <div className="pt-5 pb-2" />
      </div>
    </>
  )
}

Navbar.defaultProps = {
  linkLogo: "/",
}

Navbar.propTypes = {
  children: PropTypes.node,
  linkLogo: PropTypes.string,
}

export default Navbar
