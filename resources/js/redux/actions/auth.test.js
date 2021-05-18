import {expect} from "chai"
import thunk from "redux-thunk"
import configureStore from "redux-mock-store"
import {
  AuthDataInit,
  setCleanSession,
  setLogout,
  SET__CLEAN__AUTH,
} from "./Auth"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe("resources/js/redux/actions/Auth.js", () => {
  //   it("action setLogout() - se espera {type: SET__CLEAN__AUTH, payload: AuthDataInit}", () => {
  //     const expectedPayload = {
  //       type: SET__CLEAN__AUTH,
  //       payload: AuthDataInit,
  //     }

  //     // Initialize mockstore with empty state
  //     const store = mockStore({})

  //     // Dispatch the action
  //     store.dispatch(setLogout())
  //     // Test action
  //     const actions = store.getActions()

  //     expect(actions).to.eql([expectedPayload])
  //   })

  it("action setCleanSession() - se espera {type: SET__CLEAN__AUTH}", () => {
    const expectedPayload = {
      type: SET__CLEAN__AUTH,
    }

    // Initialize mockstore with empty state
    const store = mockStore({})

    // Dispatch the action
    store.dispatch(setCleanSession())

    // Test action
    const actions = store.getActions()

    expect(actions[0]).to.eql(expectedPayload)
  })
})
