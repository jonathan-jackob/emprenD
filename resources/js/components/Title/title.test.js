import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import Title from "."

describe("resources/js/components/Title/", () => {
  it("genera una etiqueta h1 con el texto recibido", () => {
    const wrapper = shallow(<Title value="titulo" />)

    expect(wrapper.find("h1")).to.have.lengthOf(1)
  })
})
