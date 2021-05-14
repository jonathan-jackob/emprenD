import axios from "axios"
import PropTypes from "prop-types"
import ErrorsManager from "./ErrorsManager"
const urlApi = process.env.MIX_APP_API

export const apiCall = async ({url, method, data}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: urlApi + url,
      method,
      data,
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch(({response}) => {
        ErrorsManager(response)
        reject(response)
      })
  })
}

apiCall.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  data: PropTypes.object,
}
