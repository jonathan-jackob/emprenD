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
const Home = () => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments)

  useEffect(() => {
    //   se obtienen los comments mas recientes al cargar la pagina
    dispatch(getComments())
  }, [])

  return (
    <LayoutLight>
      <CommentAdd actionComment={getComments} />

      <CommentViewAll data={comments.data} links={comments.links} />
    </LayoutLight>
  )
}

export default Home
