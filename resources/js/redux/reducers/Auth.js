import {
  AuthDataInit,
  SET__LOGIN__SUCCESS,
  SET__CLEAN__AUTH,
} from "../actions/Auth"

const AuthReducer = (state = AuthDataInit, action) => {
  switch (action.type) {
    case SET__LOGIN__SUCCESS: {
      return {...state, ...action.payload}
    }

    case SET__CLEAN__AUTH: {
      return AuthDataInit
    }

    default:
      return state
  }
}

export default AuthReducer
