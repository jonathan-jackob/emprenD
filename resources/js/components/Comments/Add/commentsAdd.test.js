import "@babel/polyfill"
import React from "react"
import {shallow} from "enzyme"
import {expect} from "chai"

import CommentAdd from "./index"
import CommentForm from "./components/CommentForm"

describe("resources/js/components/Comments/Add", () => {
  it("renderiza componente (CommentForm) si recibe una función en prop afterAddComment", () => {
    const wrapper = shallow(<CommentAdd afterAddComment={() => {}} />)

    expect(wrapper.find("CommentForm").length).to.equal(1)
  })
})

describe("resources/js/components/Comments/Add/components/CommentForm.jsx", () => {
  it("Renderiza textarea si recibe una función en el prop afterAddComment", () => {
    const wrapper = shallow(<CommentForm afterAddComment={() => {}} />)
    expect(wrapper.find("textarea").length).to.equal(1)
  })
})
