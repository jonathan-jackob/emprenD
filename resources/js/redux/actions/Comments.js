import {apiCall} from "../../Helpers/apiCall"

export const CommentsDataInit = {}
export const GET__COMMENTS__SUCCESS = "GET__COMMENTS__SUCCESS"
export const GET__COMMENTS__ERROR = "GET__COMMENTS__ERROR"

export const getComments =
  ({url, ended = () => {}}) =>
  (dispatch) => {
    if (url) {
      // limpia la url - elimina url base de api
      url = url.replace(process.env.MIX_APP_API, "")
    }

    apiCall({
      url: url || "comments",
      method: "get",
    })
      .then((response) => {
        dispatch({
          type: GET__COMMENTS__SUCCESS,
          payload: response,
        })
      })
      .catch(() => {
        dispatch({
          type: GET__COMMENTS__ERROR,
          payload: AuthDataInit,
        })
      })
      .finally(() => {
        ended()
      })
  }
