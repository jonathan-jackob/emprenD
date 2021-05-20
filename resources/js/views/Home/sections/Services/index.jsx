import React from "react"
import {servicesData} from "./data/servicesData"

const Services = () => {
  return (
    <section id="services" className="container py-5">
      <div className="row py-md-5">
        <div className="col-6">
          <h2 className="title font-bold pb-4">Servicios</h2>
        </div>
      </div>
      <div className="row py-5">
        {servicesData.map((service, index) => (
          <div className="col-6 col-md-4 col-lg-2 text-center" key={index}>
            <div className="text-secondary">{service.icon}</div>
            <p className="pt-4 ">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
