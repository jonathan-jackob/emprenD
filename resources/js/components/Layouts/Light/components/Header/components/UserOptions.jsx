import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {FaUser} from "react-icons/fa"
import {setLogout} from "../../../../../../Redux/actions/Auth"

/**
 * menu para usuario
 * boton con links [perfil, cerrar sesion]
 */
const UserOptions = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle text-white"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaUser />
        <span className="px-2">{auth?.name}</span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link className="dropdown-item" to="/profile">
            Perfil
          </Link>
        </li>
        <li>
          <a
            className="dropdown-item cursor-pointer"
            onClick={() => dispatch(setLogout())}
          >
            Cerrar session
          </a>
        </li>
      </ul>
    </div>
  )
}

export default UserOptions
