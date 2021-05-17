import "@babel/polyfill"
import React from "react"
import {expect} from "chai"
import {shallow} from "enzyme"
import ChangeValues from "."

describe("resources/js/components/Comments/ViewAll/components/ChangeValues", () => {
  it("Genera un modal Edit y un modal Delete", () => {
    const wrapper = shallow(
      <ChangeValues
        comment_id={1}
        comment="soy el coment"
        afterChangeComments={() => {}}
      />
    )
    expect(wrapper.find("ModalEdit")).to.have.lengthOf(1)
    expect(wrapper.find("ModalDelete")).to.have.lengthOf(1)
  })
})
