import React from "react"

import {social_network} from "./Helpers/icons"
import {teamData} from "./Helpers/teamData"

const Team = () => {
  return (
    <section id="team" className="container team my-5">
      <div className="row">
        {teamData.map((item, i) => (
          <div className="col-lg-4 px-3 px-lg-4 px-xxl-5 mb-5 mb-lg-0" key={i}>
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
