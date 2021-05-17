import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import AuthReducer from "../reducers/Auth"
import CommentsReducer from "../reducers/Comments"
import ErrorsReducer from "../errors"

const rootReducer = combineReducers({
  auth: AuthReducer,
  comments: CommentsReducer,
  errors: ErrorsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
