import "@babel/polyfill"
import React from "react"
import {shallow} from "enzyme"
import {expect} from "chai"

import CommentAdd from "./index"

describe("resources/js/components/Comments/Add/", () => {
  it("renderiza componente (CommentForm) si recibe una función en prop afterAddComment", () => {
    const wrapper = shallow(<CommentAdd afterAddComment={() => {}} />)

    expect(wrapper.find("CommentForm").length).to.equal(1)
  })
})
