import React from "react"

import {social_network} from "./Helpers/icons"
import {teamData} from "./Helpers/teamData"

const Team = () => {
  return (
    <section id="team" className="container team my-5">
      <div className="row">
        <div className="col-10 col-sm-9 col-md-7 col-lg-6 mb-5">
          <h2 className="title fs-2 lh-md pb-4 font-bold">
            Nuestro equipo de trabajo
          </h2>
        </div>
        <p className="col-12 lh-1 mb-5">
          Nuestro equipo está compuesto por individuos guapos, ingeniosos, y
          superpoderosos que están comprometidos con la madre naturaleza y
          utilizar sus pode- res sobrenaturales para el bien y no para el mal.
          Compartimos la pasión por innovar y mantenernos al día sobre los
          últimos acontecimientos del universo.
        </p>

        {teamData.map((item, i) => (
          <div
            className="col-lg-4 px-3 px-lg-4 px-xxl-5 mb-5 mb-lg-0 mt-4"
            key={i}
          >
            <div className="team__card shadow-lg p-4 mx-auto">
              <div className="row">
                <div className="col-sm-4 col-lg-12">
                  <div className="avatar mb-4  mb-lg-5">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="rounded-circle"
                    />
                  </div>
                  <h4 className="name fs-4 lh-1 mb-4 mb-sm-0 mb-lg-5">
                    {item.name}
                  </h4>
                </div>

                <div className="col-sm-8 col-lg-12 d-sm-flex d-lg-block flex-column justify-content-between ">
                  <p className="description mb-4">{item.description}</p>

                  <div className="row social__networks">
                    {social_network.map((social, index) => (
                      <div
                        key={index}
                        className="col-3 text-center mb-2 icon cursor-pointer"
                      >
                        {social.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
