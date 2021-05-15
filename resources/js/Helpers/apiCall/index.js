import axios from "axios"
import PropTypes from "prop-types"
import ErrorsManager from "./ErrorsManager"
const urlApi = process.env.MIX_APP_API

/**
 * maneja las peticiones a la API
 * retorna una Promise e intercepta los errores generados
 *
 * resolve() - retorna el resultado de la petición
 * reject() - retorna los errores de la petición
 *
 * @param {string} url - url si la url base de la api
 * @param {string} method
 * @param {object} data (opcional)
 * @returns Promise
 */
export const apiCall = async ({url, method, data, showErrors = true}) => {
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
        showErrors && ErrorsManager(response)
        reject(response)
      })
  })
}

apiCall.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  data: PropTypes.object,
}
