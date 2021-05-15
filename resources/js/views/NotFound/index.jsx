import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

import img404 from "../../../images/PageNotFound.svg"
import LayoutDark from "../../components/Layouts/Dark"
import LayoutLight from "../../components/Layouts/Light"

/**
 * muestra el error 404 en ruta no encontrada
 */
const NotFound = () => {
  const auth = useSelector((state) => state.auth)

  return (
    <>
      {auth?.api_token ? (
        <LayoutLight>
          <div className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1>Página no encontrada</h1>
            <img src={img404} alt="error 404 page not found" />
          </div>
        </LayoutLight>
      ) : (
        <LayoutDark>
          <div className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1>Página no encontrada</h1>
            <img src={img404} alt="error 404 page not found" />
            <h3>Quizá lo que buscas es...</h3>
            <div className="mt-4">
              <Link
                to="login"
                replace
                className="btn btn-secondary text-white mx-3"
              >
                Iniciar sesión
              </Link>

              <Link
                to="login"
                replace
                className="btn btn-secondary text-white mx-3"
              >
                Registrarme
              </Link>
            </div>
          </div>
        </LayoutDark>
      )}
    </>
  )
}

export default NotFound
