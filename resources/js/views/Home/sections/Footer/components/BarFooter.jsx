import React from "react"
import {social_network_icons} from "../Icons"

const BarFooter = () => (
  <div className="row">
    <div className="col-12 col-md-6 d-flex">
      <span className="m-auto">NEUBOX 2021 ® - Derechos reservados</span>
    </div>
    <div className="col-12 col-md-6">
      {social_network_icons.map((social, index) => (
        <a key={index} className="text-white cursor-pointer">
          {social}
        </a>
      ))}
    </div>
  </div>
)

export default BarFooter
