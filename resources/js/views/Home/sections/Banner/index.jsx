import React from "react"
import imgBack from "../../../../../images/banner.webp"

const Banner = () => {
  return (
    <section className="container-fluid banner">
      <div className="banner__background">
        <img
          //   src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          src={imgBack}
          className="banner__background"
        />
      </div>
      <div className="banner__content px-4">
        <h1 className="title display-4">¿TE GUSTA EMPRENDER?</h1>
        <p className="fs-4">Nosotros te ayudamos a hacerlo</p>
      </div>
    </section>
  )
}

export default Banner
