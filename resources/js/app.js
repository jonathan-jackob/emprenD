require("bootstrap/dist/js/bootstrap.bundle.min")
import React from "react"
import ReactDOM from "react-dom"
import {ToastContainer} from "react-toastify"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import generateStore from "./redux/store"
import Router from "./router"

function App() {
  const {store, persistor} = generateStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
        <ToastContainer />
      </PersistGate>
    </Provider>
  )
}

export default App

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"))
}
