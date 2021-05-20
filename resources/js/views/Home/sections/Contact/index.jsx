import React from "react"
import Form from "./components/Form"
import Ubicacion from "./components/Ubicacion"

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-light py-5 contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-10  mx-auto px-3">
            <div className="row">
              <div className="col-6 mb-5">
                <h2 className="title fs-2 lh-lg pb-2 font-bold">Contacto</h2>
              </div>

              <div className="w-100"></div>

              <div className="col-sm-6 col-xl-5 mx-auto bg-dark p-3  contact__max__container mx-auto order-1 order-sm-2 mb-4">
                <Ubicacion />
              </div>

              <div className="col-sm-6 col-lg-5 mx-auto contact__max__container mx-auto order-2 order-sm-1">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
