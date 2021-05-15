import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {getUserComments} from "../../Redux/actions/Comments"
import LayoutLight from "../../components/Layouts/Light"
import CommentsViewAll from "../../components/Comments/ViewAll"
import Title from "../../components/Title"
import CommentAdd from "../../components/Comments/Add"
import UserInfo from "./components/UserInfo"

/**
 * muestra la información del usuario logueado y sus comentarios
 * con la posibilidad de modificar, agregar o eliminar comentarios
 */
const Profile = () => {
  const comments = useSelector((state) => state.comments)
  //   const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(getUserComments())
  //   }, [])

  return (
    <LayoutLight title="Perfil">
      <div className="container">
        <div className="row">
          <div className="col">
            <UserInfo />
          </div>

          <CommentAdd actionComment={getUserComments} />

          {/* <div className="col-9 col-md-7 col-lg-8">
              <Title value="TUS IDEAS COMPARTIDAS" />
            </div>

            <div className="col-12 mt-2">
              <CommentsViewAll data={comments.data} links={comments.links} />
            </div> */}
        </div>
      </div>
    </LayoutLight>
  )
}

export default Profile
