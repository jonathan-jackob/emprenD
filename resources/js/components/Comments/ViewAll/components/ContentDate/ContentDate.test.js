import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import ContentDate from "."

describe("resources/js/components/Comments/ViewAll/components/ContentDate/", () => {
  it("Convierte la fecha a un formato dd-mm-yy hh:mm:ss", () => {
    const wrapper = shallow(
      <ContentDate user_id={1} created_at="2021-05-12T17:07:24.000000Z" />
    )
    expect(wrapper.find("div").text()).to.equal("21-05-12 12:07:24 - usuario 1")
  })
})
