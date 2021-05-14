import React from "react"
import CommentAdd from "../../components/Comments/Add"
import CommentViewAll from "../../components/Comments/ViewAll"
import LayoutLight from "../../Components/Layouts/Light"

const Home = () => {
  return (
    <LayoutLight>
      <CommentAdd />
      <CommentViewAll />
    </LayoutLight>
  )
}

export default Home
