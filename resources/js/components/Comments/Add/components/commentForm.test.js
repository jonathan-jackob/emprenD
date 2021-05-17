import "@babel/polyfill"
import React from "react"
import {shallow} from "enzyme"
import {expect} from "chai"
import CommentForm from "./CommentForm"

describe("resources/js/components/Comments/Add/components/", () => {
  it("Renderiza textarea si recibe una función en el prop afterAddComment", () => {
    const wrapper = shallow(<CommentForm afterAddComment={() => {}} />)
    expect(wrapper.find("textarea").length).to.equal(1)
  })
})
