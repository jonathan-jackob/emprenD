import React from "react"
import {FaPhoneAlt} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

import Logo from "../../../../Components/Logo"
import {social_network_icons, pay_icons} from "./Icons"

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
                <FaPhoneAlt size={30} className="mt-auto" />

                <div>
                  <span className="d-block fs-5">Teléfono:</span>
                  <a
                    href="tel:+523312345678"
                    className="d-block text-white text-decoration-none"
                  >
                    (33) 1234 5678
                  </a>
                </div>
              </div>
              {/* pay cards */}
              <div className="col-sm-4 mb-2 mb-sm-0 text-center">
                <div className="fs-5">Aceptamos</div>

                <div>
                  {pay_icons.map((card, index) => (
                    <i key={index} className="ms-1">
                      {card}
                    </i>
                  ))}
                </div>
              </div>
              {/* email */}
              <div className="col-sm-4  d-flex justify-content-center">
                <FiMail size={30} className="mt-auto" />
                <div>
                  <span className="d-block fs-5">Contacto:</span>

                  <a
                    href="mailto:info@emprend.com"
                    className="d-block text-white text-decoration-none"
                  >
                    info@emprend.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-center py-1">
        <div className="container">
          <div className="row">
            <div className="col-8 col-sm-12 col-md-10 col-lg-8 mx-auto">
              <div className="row">
                <div className="col-12 col-md-6 d-flex">
                  <span className="m-auto">
                    NEUBOX 2021 ® - Derechos reservados
                  </span>
                </div>
                <div className="col-12 col-md-6">
                  {social_network_icons.map((social, index) => (
                    <a key={index} className="text-white cursor-pointer">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
