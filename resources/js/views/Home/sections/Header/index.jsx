import React from "react"
import Navbar from "../../../../components/Navbar"

const Header = () => {
  const sections = [
    {title: "Inicio", id: "#"},
    {title: "Nosotros", id: "#about"},
    {title: "Servicios", id: "#services"},
    {title: "Características", id: "#features"},
    {title: "Equipo", id: "#team"},
    {title: "Contacto", id: "#contact"},
  ]
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
            {sections.map((section, index) => (
              <li key={index} className="nav-item text-center md-text-start">
                <a className="nav-link" aria-current="page" href={section.id}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
