import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {FaUser} from "react-icons/fa"
import {setLogout} from "../../../../../../Redux/actions/Auth"

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
          <a className="dropdown-item" href="#">
            Perfil
          </a>
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
