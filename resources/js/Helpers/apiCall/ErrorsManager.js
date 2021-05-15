import {toast} from "react-toastify"

/**
 * recibe los errores generados en las peticiones a la API
 * muestra un toast al usuario con el error capturado
 *
 * @param {object} response
 */
export default function (response) {
  let title = "Error interno, vuelve a intentarlo mas tarde."

  switch (response?.status) {
    case 401: //usuario no autorizado -cierra la sesión y redirecciona al login
      title = "Su sesión ha expirado, vuelva a iniciar sesión"

      break

    case 403: //usuario no autorizado -cierra la sesión y redirecciona al login
      title = "Su sesión ha expirado, vuelva a iniciar sesión"

      break
    case 422: // errores de validación - muestra el primer error al usuario
      {
        for (const err in response.data.errors) {
          const element = response.data.errors[err]
          title = element[0]
          break
        }
      }
      break
    default: {
      //
    }
  }

  toast.error(title, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  })
}
