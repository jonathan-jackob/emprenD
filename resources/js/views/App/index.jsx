import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import CommentAdd from "../../components/Comments/Add"
import CommentViewAll from "../../components/Comments/ViewAll"
import LayoutLight from "../../Components/Layouts/Light"
import {getComments} from "../../redux/actions/Comments"

/**
 * Muestra la pagina principal (con sesión activa)
 *
 * muestra una sección donde registrar nuevas ideas
 * muestra una lista con las ultimas 10 ideas compartidas
 */
const App = () => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments)

  const loadComments = () => {
    //   se obtienen los comments mas recientes
    dispatch(getComments())
  }

  useEffect(() => {
    loadComments()
  }, [])

  return (
    <LayoutLight>
      <CommentAdd afterAddComment={loadComments} />

      <CommentViewAll
        data={comments?.data}
        links={comments?.links}
        optionsComment
        afterChangeComments={loadComments}
      />
    </LayoutLight>
  )
}

export default App
