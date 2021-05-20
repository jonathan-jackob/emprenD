import {
  CommentsDataInit,
  GET__COMMENTS__SUCCESS,
  SET__RESET__COMMENTS,
  SET__USER__COMMENT,
} from "../actions/Comments"

const CommentsReducer = (state = CommentsDataInit, action) => {
  switch (action.type) {
    case GET__COMMENTS__SUCCESS: {
      return {...action.payload}
    }

    case SET__USER__COMMENT: {
      let users = state?.user != undefined ? state.users : []
      users.push(action.payload)

      return {...state, users}
    }

    case SET__RESET__COMMENTS: {
      return CommentsDataInit
    }

    default:
      return state
  }
}

export default CommentsReducer
