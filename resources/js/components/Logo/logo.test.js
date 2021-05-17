import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import Logo from "."

describe("resources/js/components/Logo/", () => {
  const wrapper = shallow(<Logo size={50} className="logo__emprend" />)

  it("debe generar un icono", () => {
    expect(wrapper.find("FaCompass")).to.have.lengthOf(1)
  })

  it("genera el texto emprenD", () => {
    expect(wrapper.find(".logo__emprend").text()).to.contain("emprenD")
  })
})
