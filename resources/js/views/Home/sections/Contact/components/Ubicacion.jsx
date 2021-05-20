import React from "react"
import {FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

const Ubicacion = () => {
  return (
    <div className="row contact__location">
      <div className="col-12 pb-3">
        <iframe
          className="h-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1363.149538145485!2d-92.26343332279107!3d14.90535252776045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e0f200b6de3a9%3A0xae11c8fe07a7c8c4!2sParque%20Bicentenario!5e0!3m2!1ses-419!2smx!4v1621527741947!5m2!1ses-419!2smx"
          loading="lazy"
        ></iframe>
      </div>

      <div className="col-12 p-2 text-white">
        <h5 className="title pb-2 mb-3">Ubicación</h5>

        <div className="d-flex mb-2">
          <i className="mx-4">
            <FaPhoneAlt size={25} />
          </i>
          <a href="tel:+523312345678">33 1234 5678</a>
        </div>

        <div className="d-flex mb-2">
          <i className="mx-4">
            <FiMail size={25} />
          </i>
          <a href="mailto:info@emprend.com">info@emprend.com</a>
        </div>

        <div className="d-flex">
          <i className="mx-4">
            <FaMapMarkerAlt size={30} />
          </i>

          <p className="lh-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ubicacion
