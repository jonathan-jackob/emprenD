import {apiCall} from "../../Helpers/apiCall"
import {SET__ERRORS} from "../errors"

export const CommentsDataInit = {
  data: [],
  links: {},
  meta: {},
  users: [],
}
export const GET__COMMENTS__SUCCESS = "GET__COMMENTS__SUCCESS"
export const SET__RESET__COMMENTS = "SET__RESET__COMMENTS"
export const SET__USER__COMMENT = "SET__USER__COMMENT"

const getUses = async (responseComments, dispatch) => {
  let comments = [...responseComments.data] //obtenemos los comentarios

  //   extraemos los ids de usuarios de los comentarios, sin repetir usuario
  const ids = await [...new Set(comments.map((comment) => comment.user_id))]

  ids.forEach(async (id) => {
    await apiCall({
      url: "user/" + id,
      method: "get",
    }).then((response) => {
      dispatch({
        type: SET__USER__COMMENT,
        payload: {name: response.data.name, id: response.data.id},
      })
    })
  })
}

/**
 * petición GET a la API
 * para obtener los primeros 10 comments
 */
export const getComments = () => (dispatch) => {
  apiCall({
    url: "comments",
    method: "get",
  })
    .then((response) => {
      getUses(response, dispatch)

      dispatch({
        type: GET__COMMENTS__SUCCESS,
        payload: response,
      })
    })
    .catch((errors) => {
      dispatch({
        type: SET__ERRORS,
        payload: errors,
      })

      dispatch({
        type: SET__RESET__COMMENTS,
      })
    })
}

/**
 * petición GET a la API
 * para obtener lso registros paginados gracias a la url recibida
 *
 * @param {string} url
 * @param {function} success callback / se ejecuta cuanto todo sale bien
 * @param {function} ended callback / se ejecuta al finalizar la promesa
 * @returns
 */
export const getCommentsPaginate =
  ({url, success = () => {}, ended = () => {}}) =>
  (dispatch) => {
    // limpia la url - elimina url base de api
    url = url.replace(process.env.MIX_APP_API, "")

    apiCall({
      url: url,
      method: "get",
    })
      .then((response) => {
        getUses(response, dispatch)

        dispatch({
          type: GET__COMMENTS__SUCCESS,
          payload: response,
        })
        success()
      })
      .catch((errors) => {
        dispatch({
          type: SET__ERRORS,
          payload: errors,
        })

        dispatch({
          type: SET__RESET__COMMENTS,
        })
      })
      .finally(() => {
        ended()
      })
  }

/***
 * petición GET a la API
 * para obtener los comentarios del usuario con la sesión activa
 */
export const getUserComments = () => async (dispatch) => {
  // reinicia los mensajes
  await dispatch({
    type: SET__RESET__COMMENTS,
  })

  await apiCall({
    url: "user/comments",
    method: "get",
  })
    .then((response) => {
      getUses(response, dispatch)

      dispatch({
        type: GET__COMMENTS__SUCCESS,
        payload: {data: response},
      })
    })
    .catch((errors) => {
      dispatch({
        type: SET__ERRORS,
        payload: errors,
      })

      dispatch({
        type: SET__RESET__COMMENTS,
      })
    })
}
