import React from "react"
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTumblrSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa"
import {ImMail} from "react-icons/im"
import {IoLogoLinkedin} from "react-icons/io"

import imgTeam1 from "../../../../../images/team/team1.jpg"
import imgTeam2 from "../../../../../images/team/team2.jpg"
import imgTeam3 from "../../../../../images/team/team3.jpg"

const Team = () => {
  const sizeIcon = 50
  const team = [
    {
      name: "Homero Archundia",
      picture: imgTeam1,
      description:
        "Consectetur minus laborum molestiae officia, earum quidem quas. Quidem Appe is Awesome App . Officia, earum quidem quas. Quidem Appe is laborium .",
    },
    {
      name: "Steven Spilbergo",
      picture: imgTeam2,
      description:
        "Consectetur minus laborum molestiae officia, earum quidem quas. Quidem Appe is Awesome App . Officia, earum quidem quas. Quidem Appe is laborium .",
    },
    {
      name: "Guillo del Toro",
      picture: imgTeam3,
      description:
        "Consectetur minus laborum molestiae officia, earum quidem quas. Quidem Appe is Awesome App . Officia, earum quidem quas. Quidem Appe is laborium .",
    },
  ]

  const social_network = [
    {name: "tweeter", icon: <FaTwitterSquare size={sizeIcon} />},
    {name: "facebook", icon: <FaFacebookSquare size={sizeIcon} />},
    {name: "linkedin", icon: <IoLogoLinkedin size={sizeIcon} />},
    {name: "mail", icon: <ImMail size={sizeIcon} />},
    {name: "g_plus", icon: <FaGooglePlusSquare size={sizeIcon} />},
    {name: "youtube", icon: <FaYoutubeSquare size={sizeIcon} />},
    {name: "pinterest", icon: <FaPinterestSquare size={sizeIcon} />},
    {name: "tumblr", icon: <FaTumblrSquare size={sizeIcon} />},
  ]

  return (
    <section id="team" className="container team my-5">
      <div className="row">
        {team.map((item, i) => (
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
