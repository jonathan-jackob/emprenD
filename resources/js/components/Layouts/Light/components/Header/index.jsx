import React from "react"
import {FaCompass} from "react-icons/fa"
import UserOptions from "./components/UserOptions"

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar navbar-light bg-white fixed-top position-fixed">
        <div className="container">
          <a className="navbar-brand font-bold" href="#">
            <FaCompass className="text-secondary" size={25} /> emprenD
          </a>

          <UserOptions />
        </div>
      </nav>
    </div>
  )
}

export default Header
