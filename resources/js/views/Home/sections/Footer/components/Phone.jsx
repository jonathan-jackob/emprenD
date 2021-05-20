import React from "react"
import {FaPhoneAlt} from "react-icons/fa"

const Phone = () => (
  <>
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
  </>
)

export default Phone
