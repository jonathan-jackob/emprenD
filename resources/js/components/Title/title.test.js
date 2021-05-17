import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import Title from "."

describe("resources/js/components/Logo", () => {
  it("genera un icono y el texto emprenD", () => {
    const wrapper = shallow(<Title value="titulo" />)

    expect(wrapper.find("h1")).to.have.lengthOf(1)
  })
})
