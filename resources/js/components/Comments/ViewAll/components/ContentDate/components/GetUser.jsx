import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {useSelector} from "react-redux"

/**
 * obtiene el nombre del usuario al que corresponde el id recibido
 * @param {number} id
 */
const GetUser = ({id}) => {
  const {users} = useSelector((state) => state.comments)
  const [user, setUser] = useState("usuario")

  useEffect(() => {
    users &&
      users.forEach((item) => {
        if (item.id == id) {
          setUser(item.name)
        }
      })
  }, [users])

  return <span>{user}</span>
}

GetUser.propTypes = {
  id: PropTypes.number.isRequired,
}

export default GetUser
