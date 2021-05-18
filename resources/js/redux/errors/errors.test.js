import {expect} from "chai"
import thunk from "redux-thunk"
import configureStore from "redux-mock-store"
import {setCleanErrors, setErrors, SET__CLEAN__ERRORS, SET__ERRORS} from "."

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe("resources/js/redux/errors/", () => {
  it("action setCleanErrors() sea espera {type:SET__CLEAN__ERRORS}", () => {
    const expectedPayload = {
      type: SET__CLEAN__ERRORS,
    }

    // Initialize mockstore with empty state
    const store = mockStore({})

    // Dispatch the action
    store.dispatch(setCleanErrors())

    // Test action
    const actions = store.getActions()

    expect(actions[0]).to.eql(expectedPayload)
  })

  it("action setErrors(errors) - se espera {type: SET__ERRORS, payload: {...errors}}", () => {
    const errors = {
      status: 500,
      message: "prueba de error",
    }
    const expectedPayload = {
      type: SET__ERRORS,
      payload: errors,
    }

    // Initialize mockstore with empty state
    const store = mockStore({})

    // Dispatch the action
    store.dispatch(setErrors(errors))

    // Test action
    const actions = store.getActions()

    expect(actions[0]).to.eql(expectedPayload)
  })
})
