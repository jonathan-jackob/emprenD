import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {FaArrowRight} from "react-icons/fa"
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"

import {InputValidation} from "./validations"
import {setLogin} from "../../Redux/actions/Auth"
import LayoutDark from "../../components/Layouts/Dark"
import ButtonLoad from "../../components/ButtonLoad"
import Logo from "../../components/Logo"

/**
 * muestra el formulario para iniciare sesión
 */
const Login = () => {
  const [loader, setLoader] = useState(false)

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "all",
  })

  const onSubmit = (data) => {
    setLoader(true)

    dispatch(
      setLogin({
        data,
        success: () => {
          //   console.log("sjsj")
        },
        ended: () => {
          setLoader(false)
        },
      })
    )
  }

  return (
    <LayoutDark title="Iniciar sesión">
      <form className="row w-100  fs-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto">
          <Logo size={40} className="fs-1 text-center font-bold mb-3" />

          <div className="mb-3 text-end">
            <label className="form-label mb-0">Email</label>
            <input
              type="text"
              className={`form-control fs-5 py-2 ${
                errors?.email?.message ? "is-invalid" : ""
              }`}
              {...register("email", InputValidation.email)}
            />
            <div className="form-text text-danger lh-1">
              {errors?.email?.message}
            </div>
          </div>

          <div className="mb-3 text-end">
            <label className="form-label mb-0">Contraseña</label>

            <input
              type="password"
              className={`form-control fs-5 py-2 ${
                errors?.password?.message ? "is-invalid" : ""
              }`}
              {...register("password", InputValidation.password)}
            />

            <div className="form-text text-danger lh-sm">
              {errors?.password?.message}
            </div>
          </div>

          <div className="text-end">
            <ButtonLoad
              className="btn btn-secondary text-white fs-5"
              text={
                <>
                  Iniciar sesión <FaArrowRight />
                </>
              }
              loader={loader}
              textLoader="Procesando"
            />
          </div>

          <div>
            <Link to="/register" className="text-white" replace>
              Registrarme
            </Link>
          </div>
        </div>
      </form>
    </LayoutDark>
  )
}

export default Login
