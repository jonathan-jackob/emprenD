import React from "react"
import {pay_icons} from "../Icons"

const Cards = () => (
  <>
    <div className="fs-5">Aceptamos</div>

    <div>
      {pay_icons.map((card, index) => (
        <i key={index} className="ms-1">
          {card}
        </i>
      ))}
    </div>
  </>
)

export default Cards
