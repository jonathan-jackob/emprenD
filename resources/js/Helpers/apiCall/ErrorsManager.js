// import {useDispatch} from "react-redux"
import {toast} from "react-toastify"
import {endSession} from "../../Redux/actions/Auth"
// const dispatch = useDispatch()

export default function (response) {
  let title = "Error interno, vuelve a intentarlo mas tarde."

  switch (response?.status) {
    case 401:
      {
        title = "Su sesión ha expirado, vuelva a iniciar sesión"
        window.sessionStorage.clear()
        setTimeout(() => {
          window.location.replace("/login")
        }, 3000)
      }
      break
    case 422:
      {
        for (const err in response.data.errors) {
          const element = response.data.errors[err]
          title = element[0]
          break
        }
      }
      break
    default: {
      //xd
    }
  }

  console.log(response)

  toast.error(title, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  })
}
