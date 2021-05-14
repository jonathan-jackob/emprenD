import {
  CommentsDataInit,
  GET__COMMENTS__ERROR,
  GET__COMMENTS__SUCCESS,
} from "../actions/Comments"

const AuthReducer = (state = CommentsDataInit, action) => {
  switch (action.type) {
    case GET__COMMENTS__SUCCESS: {
      return {...state, ...action.payload}
    }

    case GET__COMMENTS__ERROR: {
      return {...state, ...action.payload}
    }

    default:
      return state
  }
}

export default AuthReducer
