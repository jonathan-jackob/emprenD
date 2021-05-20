import React from "react"
import Navbar from "../../../../components/Navbar"
import {sectionsLinks} from "./data/sectionsLinks"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Navbar>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-auto" id="navbarNav">
          <ul className="navbar-nav flex justify-content-around w-100">
            {sectionsLinks.map((section, index) => (
              <li key={index} className="nav-item text-center md-text-start">
                <a className="nav-link" aria-current="page" href={section.id}>
                  {section.title}
                </a>
              </li>
            ))}

            <li className="nav-item text-center md-text-start">
              <Link className="nav-link" to="/login">
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
