import React from "react"

import Logo from "../../../../Components/Logo"
import BarFooter from "./components/BarFooter"
import Cards from "./components/Cards"
import Contacto from "./components/Contacto"
import Phone from "./components/Phone"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container mb-4">
        <div className="row">
          <div className="col-8 col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="row">
              <div className="col-12 display-5 text-center title pb-4 mb-4 font-bold">
                <Logo size={40} />
              </div>

              {/* telefono */}
              <div className="col-sm-4 mb-2 mb-sm-0 d-flex justify-content-center">
                <Phone />
              </div>
              {/* pay cards */}
              <div className="col-sm-4 mb-2 mb-sm-0 text-center">
                <Cards />
              </div>
              {/* email */}
              <div className="col-sm-4  d-flex justify-content-center">
                <Contacto />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-center py-1">
        <div className="container">
          <div className="row">
            <div className="col-8 col-sm-12 col-md-10 col-lg-8 mx-auto">
              <BarFooter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
