import React from "react"
import {Provider} from "react-redux"
import generateStore from "../../redux/store/storeTest"

const AppTest = ({children}) => {
  const store = generateStore()

  return <Provider store={store}>{children}</Provider>
}

export default AppTest
