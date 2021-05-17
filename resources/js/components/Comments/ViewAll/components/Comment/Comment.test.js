import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import Comment from "."

describe("resources/js/components/Comments/ViewAll/components/Comment/", () => {
  it("Renderiza div con el contenido enviado en el prop body", () => {
    const body = "soy el body"
    const wrapper = shallow(<Comment body={body} />)
    expect(wrapper.find(".comments--content--comment").text()).to.equal(body)
  })
})
