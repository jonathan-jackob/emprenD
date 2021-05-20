import React from "react"
import {FaArrowRight} from "react-icons/fa"

const About = () => (
  <section id="about" className="about">
    <div className="container-fluid px-0 h-100">
      <div className="row mx-0 h-100">
        <div className="col-12 col-md-6 px-5">
          <div className="about__content py-3 py-md-5">
            <h2 className="title fs-2 lh-lg w-100 pb-2 font-bold">Nosotros</h2>

            <div className="py-4">
              <p className="px-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                placeat tempora animi voluptatem eius tempore consequuntur
                blanditiis fuga quas impedit quasi alias ullam at sequi labore
                qui deserunt consequatur delectus.
              </p>
              <p className="px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                nihil non sed deserunt quis magni facilis reiciendis facere!
              </p>
            </div>

            <div className="text-start w-100">
              <button className="btn btn-secondary text-white">
                <FaArrowRight /> Soy un botón
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 position-relative px-0">
          <img
            src="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="about__image"
          />
        </div>
      </div>
    </div>
  </section>
)

export default About
