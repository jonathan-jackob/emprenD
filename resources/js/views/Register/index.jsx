import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"

import {InputValidation} from "./validations"
import LayoutDark from "../../components/Layouts/Dark"
import ButtonLoad from "../../components/ButtonLoad"
import Logo from "../../components/Logo"
import {apiCall} from "../../Helpers/apiCall"
import {toast} from "react-toastify"

const Register = () => {
  const [loader, setLoader] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    mode: "all",
  })

  const onSubmit = (data) => {
    setLoader(true)

    apiCall({
      url: "register",
      method: "post",
      data,
    })
      .then(() => {
        toast.success(
          "Registro exitoso, ya puedes iniciar sesión y compartir tus grandiosas ideas.",
          {autoClose: 5000}
        )
        setTimeout(() => {
          window.location.replace("/login")
        }, 5000)
      })
      .finally(() => {
        setLoader(false)
      })
  }

  return (
    <LayoutDark title="Registrate">
      <form className="row w-100  fs-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto">
          <Logo />

          <div className="mb-3 text-end">
            <label className="form-label mb-0">Nombre</label>
            <input
              type="text"
              className={`form-control fs-5 py-2 ${
                errors?.name?.message ? "is-invalid" : ""
              }`}
              {...register("name", InputValidation.name)}
            />
            <div className="form-text text-danger lh-1">
              {errors?.name?.message}
            </div>
          </div>

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

          <div className="mb-3 text-end">
            <label className="form-label mb-0">Repita la contraseña</label>

            <input
              type="password"
              className={`form-control fs-5 py-2 ${
                errors?.password_confirmation?.message ? "is-invalid" : ""
              }`}
              {...register("password_confirmation", {
                ...InputValidation.password,
                validate: (value) =>
                  value === getValues("password") ||
                  "Las contraseñas no son coinciden",
              })}
            />

            <div className="form-text text-danger lh-sm">
              {errors?.password_confirmation?.message}
            </div>
          </div>

          <div className="text-end">
            <ButtonLoad
              className="btn btn-secondary text-white fs-5"
              text={
                <>
                  Registrarme <FaArrowRight />
                </>
              }
              loader={loader}
              textLoader="Procesando"
            />
          </div>

          <div className="">
            <Link to="/login" replace className="text-white">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </form>
    </LayoutDark>
  )
}

export default Register
