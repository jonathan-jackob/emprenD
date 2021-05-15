import React, {useEffect} from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {setCleanSession} from "../redux/actions/Auth"
import {setCleanErrors} from "../redux/errors"

/**
 * oye los cambios de los errores
 * y asigna el token a axios para peticiones (si el usuario inicio sesión)
 * cierra la sesión si se genera una respuesta no autorizada (error 401 ó 403)
 */
const SessionState = () => {
  const dispatch = useDispatch()
  const {auth, errors} = useSelector((state) => state)
  const token = auth?.api_token

  useEffect(() => {
    const status = errors?.status

    if (status === 401 || status === 403) {
      dispatch(setCleanSession())
      dispatch(setCleanErrors())
    }
  }, [errors])

  if (token) {
    // si existe un token se lo asigna a axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  return null
}

export default SessionState
