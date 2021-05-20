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
  const {comments, auth} = useSelector((state) => state)
  const dispatch = useDispatch()

  const loadComments = (reset = false) => {
    dispatch(getUserComments({id: auth?.id, reset}))
  }

  useEffect(() => {
    loadComments(true)
  }, [])

  return (
    <LayoutLight title="Perfil">
      <div className="container">
        <div className="row">
          <div className="col">
            <UserInfo />
          </div>

          <CommentAdd afterAddComment={loadComments} />

          {comments?.data?.length > 0 && (
            <>
              <div className="col-9 col-md-7 col-lg-8 mb-2">
                <Title value="MIS IDEAS COMPARTIDAS" />
              </div>

              <div className="col-12 mt-2">
                <CommentsViewAll
                  data={comments?.data}
                  links={comments?.links}
                  optionsComment
                  afterChangeComments={loadComments}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </LayoutLight>
  )
}

export default Profile
