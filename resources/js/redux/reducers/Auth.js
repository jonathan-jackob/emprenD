import {
  AuthDataInit,
  GET__LOGIN__ERROR,
  GET__LOGIN__SUCCESS,
} from "../actions/Auth"

const AuthReducer = (state = AuthDataInit, action) => {
  switch (action.type) {
    case GET__LOGIN__SUCCESS: {
      return {...state, ...action.payload}
    }

    case GET__LOGIN__ERROR: {
      return {...AuthDataInit}
    }

    default:
      return state
  }
}

export default AuthReducer
