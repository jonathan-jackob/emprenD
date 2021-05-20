import React from "react"
import {FiMail} from "react-icons/fi"

const Contacto = () => (
  <>
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
  </>
)

export default Contacto
