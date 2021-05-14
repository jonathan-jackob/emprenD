import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage/session"

import AuthReducer from "../reducers/Auth"
import CommentsReducer from "../reducers/Comments"

const rootReducer = combineReducers({
  auth: AuthReducer,
  comments: CommentsReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  let persistor = persistStore(store)

  return {store, persistor}
}
