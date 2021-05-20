import React from "react"
import {MdDateRange, MdLaptopMac} from "react-icons/md"
import {GoKeyboard} from "react-icons/go"
import {AiOutlineFolderOpen} from "react-icons/ai"
import {FiMonitor} from "react-icons/fi"
import {IoIosSave} from "react-icons/io"

const Services = () => {
  const sizeIcon = 80
  const servicesIcons = [
    {
      text: "Sans adipiscing elit, sed diam nonummy venit",
      icon: <MdLaptopMac size={sizeIcon} />,
    },
    {
      text: "Sans adipiscing elit, sed diam nonummy venit",
      icon: <GoKeyboard size={sizeIcon} />,
    },
    {
      text: "Sans adipiscing elit, sed diam nonummy venit",
      icon: <AiOutlineFolderOpen size={sizeIcon} />,
    },
    {
      text: "Sans adipiscing elit, sed diam nonummy venit",
      icon: <MdDateRange size={sizeIcon} />,
    },
    {
      text: "Sans adipiscing elit, sed diam nonummy venit",
      icon: <FiMonitor size={sizeIcon} />,
    },
    {
      text: "Sans adipiscing elit, sed diam nonummy venit",
      icon: <IoIosSave size={sizeIcon} />,
    },
  ]

  return (
    <section id="services" className="container py-5">
      <div className="row py-md-5">
        <div className="col-6">
          <h2 className="title font-bold pb-4">Servicios</h2>
        </div>
      </div>
      <div className="row py-5">
        {servicesIcons.map((service, index) => (
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
