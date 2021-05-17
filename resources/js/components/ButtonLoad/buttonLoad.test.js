import React from "react"
import {shallow} from "enzyme"
import {expect} from "chai"

import ButtonLoad from "./"

describe("resources/js/components/ButtonLoad/", () => {
  const text = "soy un botón"
  it("cargando el componente con un texto básico", () => {
    const wrapper = shallow(<ButtonLoad text={text} />)

    expect(wrapper.find("button").text()).to.contain(text)
  })

  it("cargando el componente con un texto de loader", () => {
    const wrapper = shallow(
      <ButtonLoad text={text} loader={true} textLoader="cargando" />
    )
    expect(wrapper.find("span").length).to.equal(1)
  })
})
