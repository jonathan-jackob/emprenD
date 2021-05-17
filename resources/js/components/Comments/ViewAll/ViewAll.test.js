// import "@babel/polyfill"
// import React from "react"
// import {expect} from "chai"
// import {shallow} from "enzyme"
// import CommentsViewAll from "."
// import AppTest from "../../../test/AppTest"

// describe("resources/js/components/Comments/ViewAll", () => {
//   it("Renderiza un array de comentarios", () => {
//     const wrapper = shallow(
//       <AppTest>
//         <CommentsViewAll
//           data={[
//             {
//               user_id: 1,
//               body: "message",
//               created_at: "2021-05-12T17:07:24.000000Z",
//               update_at: "2021-05-12T17:07:24.000000Z",
//             },
//           ]}
//           links={{}}
//           optionsComment
//           afterChangeComments={() => {}}
//         />
//       </AppTest>
//     )
//     expect(
//       wrapper
//         .find("CommentsViewAll")
//         .shallow()
//         .find(".comments--content--comment")
//     ).to.have.lengthOf(1)
//   })
// })
