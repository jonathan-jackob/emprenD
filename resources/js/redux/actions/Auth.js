import {toast} from "react-toastify"
import {apiCall} from "../../Helpers/apiCall"
// import {GET__LOGIN__SUCCESS, GET__LOGIN__ERROR, AuthDataInit} from "../Auth/constants"
export const AuthDataInit = {}

export const GET__LOGIN__SUCCESS = "GET__LOGIN__SUCCESS"
export const GET__LOGIN__ERROR = "GET__LOGIN__ERROR"

//getState
/**
 *inicia sesion en la appa
 * @param {object} data user, password, remember
 * @param {function} success funcion que se ejecuta al tener exito en la promesa
 * @param {function} error funcion que se ejecuta al tener error en la promesa
 * @param {function} ended funcion que se ejecuta al finalizar la promesa
 * @returns
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
        dispatch({
          type: GET__LOGIN__SUCCESS,
          payload: response.data,
        })
        success()
      })
      .catch(() => {
        dispatch({
          type: GET__LOGIN__ERROR,
          payload: AuthDataInit,
        })
      })
      .finally(() => {
        ended()
      })
  }

export const setLogout = () => (dispatch) => {
  apiCall({
    url: "logout",
    method: "post",
  })
    .then(() => {
      toast.info("Hasta pronto...")
    })
    .finally(() => {
      dispatch({
        type: GET__LOGIN__ERROR,
        payload: AuthDataInit,
      })
    })
}
