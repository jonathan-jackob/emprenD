import React from "react"
import {FaCompass} from "react-icons/fa"
import UserOptions from "./components/UserOptions"
import {Link} from "react-router-dom"

import Logo from "../../../../Logo"
/**
 * muestra una barra superior de la aplicación con opciones
 * para usuarios con sesión activa
 */
const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar navbar-light bg-white fixed-top position-fixed">
        <div className="container">
          <Link className="navbar-brand" to="/" replace>
            <Logo size={25} className="font-bold fs-4" />
          </Link>

          <UserOptions />
        </div>
      </nav>
    </div>
  )
}

export default Header
