import React from "react"
import {shallow} from "enzyme"
import {expect} from "chai"

import ButtonLoad from "./"

describe("resources/js/components/ButtonLoad", () => {
  it("cargando el componente con un texto básico", () => {
    const wrapper = shallow(<ButtonLoad text="soy un botón" />)
  })

  it("cargando el componente con un texto de loader", () => {
    const wrapper = shallow(
      <ButtonLoad text="soy un botón" loader={true} textLoader="cargando" />
    )
    expect(wrapper.find("span").length).to.equal(1)
  })
})
