import React from "react"
import {ImFilePicture, ImMusic} from "react-icons/im"
import {FaMoneyBillAlt, FaTimes} from "react-icons/fa"
import {AiOutlineFolderOpen} from "react-icons/ai"

const Features = () => {
  const sizeIcon = 40
  const data = [
    {
      icon: <ImMusic size={sizeIcon} />,
      title: "Lorem, ipsum.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex distinctio vero nemo impedit vitae molestias fuga error! Quo impedit iusto aliquam a alias voluptates tempore porro sapiente vel fugit.",
    },

    {
      icon: <FaMoneyBillAlt size={sizeIcon} />,
      title: "Lorem, ipsum.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex distinctio vero nemo impedit vitae molestias fuga error! Quo impedit iusto aliquam a alias voluptates tempore porro sapiente vel fugit.",
    },

    {
      icon: <AiOutlineFolderOpen size={sizeIcon} />,
      title: "Lorem, ipsum.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex distinctio vero nemo impedit vitae molestias fuga error! Quo impedit iusto aliquam a alias voluptates tempore porro sapiente vel fugit.",
    },
  ]
  return (
    <section id="features" className="features bg-gray-light py-5">
      <div className="container">
        <div className="row py-md-5">
          <div className="col-6">
            <h2 className="title font-bold pb-4">Características</h2>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-7 col-lg-8">
            {data.map((item, index) => (
              <div className="row" key={index}>
                <div className="col-2 text-secondary text-end">{item.icon}</div>
                <div className="col-10">
                  <h4 className="text-secondary">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 col-lg-3 p-5 features__image">
            <ImFilePicture size={90} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
