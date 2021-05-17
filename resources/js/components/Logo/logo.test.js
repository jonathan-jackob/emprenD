import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import Logo from "."

describe("resources/js/components/Logo", () => {
  it("genera un icono y el texto emprenD", () => {
    const wrapper = shallow(<Logo size={50} className="logo__emprend" />)
    expect(wrapper.find("FaCompass")).to.have.lengthOf(1)
    expect(wrapper.find(".logo__emprend").text()).to.contain("emprenD")
  })
})
