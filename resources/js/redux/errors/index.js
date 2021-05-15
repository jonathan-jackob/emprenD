//constants
export const initErrors = {}
export const SET__ERRORS = "SET__ERRORS"
export const SET__CLEAN__ERRORS = "SET__CLEAN__ERRORS"

//reducer
const ErrorsReducer = (state = initErrors, action) => {
  switch (action.type) {
    case SET__ERRORS: {
      return {...action.payload}
    }

    case SET__CLEAN__ERRORS: {
      return initErrors
    }

    default: {
      return {...state}
    }
  }
}
export default ErrorsReducer

//actions
export const setErrors = (errors) => (dispatch) => {
  dispatch({
    type: SET__ERRORS,
    payload: errors,
  })
}

export const setCleanErrors = () => (dispatch) => {
  dispatch({
    type: SET__CLEAN__ERRORS,
  })
}
