// import {toast} from "react-toastify"
import {apiCall} from "../../Helpers/apiCall"
import {SET__USER__COMMENT} from "./Comments"
export const AuthDataInit = {}

export const SET__LOGIN__SUCCESS = "SET__LOGIN__SUCCESS"
export const SET__CLEAN__AUTH = "SET__CLEAN__AUTH"

/**
 * petición POST a la API
 * se envía el EMAIL y PASSWORD para intentar iniciar sesión en la API
 *
 * @param {object} data user, password
 * @param {function} success callback / se ejecuta al tener exito en la promesa
 * @param {function} ended callback / se ejecuta al finalizar la promesa
 */
export const setLogin =
  ({data, success = () => {}, ended = () => {}}) =>
  (dispatch) => {
    apiCall({
      url: "login",
      method: "post",
      data,
    })
      .then((response) => {
        // icializa los datos en redux - auth
        dispatch({
          type: SET__LOGIN__SUCCESS,
          payload: response.data,
        })
        success()
      })
      .catch(() => {
        dispatch({
          type: SET__CLEAN__AUTH,
        })
      })
      .finally(() => {
        ended()
      })
  }

/**
 * Petición POST a la API
 * se solicita el cierre de la sesión activa
 *
 * sin importar que la petición falle o no,
 * al manejar una sesión en el navegador,
 * se puede cerrar la sesión localmente
 * para brindar una mejor experiencia al usuario
 */
export const setLogout = () => async (dispatch) => {
  await apiCall({
    url: "logout",
    method: "post",
    showErrors: false,
  })
    // .then(() => {
    //   toast.info("Hasta pronto...")
    // })
    .finally(() => {
      dispatch({
        type: SET__CLEAN__AUTH,
        payload: AuthDataInit,
      })
    })
}

export const setCleanSession = () => (dispatch) => {
  dispatch({
    type: SET__CLEAN__AUTH,
  })
}
