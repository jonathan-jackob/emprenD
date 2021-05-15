import React from "react"
import {FaUser} from "react-icons/fa"
import {useSelector} from "react-redux"

/**
 * muestra la información del usuario con sesión activa
 */
const UserInfo = () => {
  const auth = useSelector((state) => state.auth)

  return (
    <div className="row py-3 justify-content-center">
      <div className="col-12 col-md-3 d-flex justify-content-center">
        <FaUser
          size={150}
          className="bg-white rounded-circle p-1 text-secondary"
        />
      </div>
      <div className="col-md-6 col-xl-5 fs-4 text-center d-flex flex-column justify-content-center">
        <div className=" text-capitalize">{auth.name}</div>
        <div>{auth.email}</div>
      </div>
    </div>
  )
}

export default UserInfo
