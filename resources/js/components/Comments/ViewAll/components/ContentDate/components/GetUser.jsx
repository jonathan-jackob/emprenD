import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {useSelector} from "react-redux"

/**
 * obtiene el nombre del usuario al que corresponde el id recibido
 * @param {number} id
 */
const GetUser = ({id}) => {
  const {users} = useSelector((state) => state.comments)
  const auth = useSelector((state) => state.auth)

  const [user, setUser] = useState("")

  const setUserFn = () => {
    if (id === auth.id) {
      setUser(auth.name)
    } else if (users) {
      users.forEach((item) => {
        if (item.id == id) {
          setUser(item.name)
        }
      })
    }
  }

  //   se ejecutal al provocarse un cambio en users u auth
  useEffect(() => {
    setUserFn()
  }, [users, auth])

  return <span>{user}</span>
}

GetUser.propTypes = {
  id: PropTypes.number.isRequired,
}

export default GetUser
