import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {FaArrowRight} from "react-icons/fa"
import {toast} from "react-toastify"
import {Datepicker} from "vanillajs-datepicker"
import es from "vanillajs-datepicker/locales/es"

import ButtonLoad from "../../../../../../components/ButtonLoad"
import {InputValidation} from "./validations"

const Form = () => {
  Object.assign(Datepicker.locales, es)
  const [loader, setLoader] = useState(false)
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({mode: "all"})

  const onSubmit = (data) => {
    console.log(data)

    setLoader(true)

    setTimeout(() => {
      toast.success(
        "Mensaje enviado, gracias por comunicarse con nosotros, le responderemos lo antes posible",
        {
          autoClose: 12000,
        }
      )

      setLoader(false)

      reset()
    }, 1000)
  }

  useEffect(() => {
    const elem = document.querySelector("#date-picker")
    const datepicker = new Datepicker(elem, {
      // ...options
      language: "es",
    })
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h4 className="font-bold fs-3">Escríbenos</h4>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className="mb-3">
        <input
          className={`form-control ${
            errors?.name?.message ? "is-invalid" : ""
          }`}
          type="text"
          {...register("name", InputValidation.name)}
          placeholder="Nombre"
        />
        <small className="text-danger">{errors?.name?.message}</small>
      </div>

      <div className="mb-3">
        <input
          className={`form-control ${
            errors?.email?.message ? "is-invalid" : ""
          }`}
          type="text"
          {...register("email", InputValidation.email)}
          placeholder="Correo Electrónico"
        />
        <small className="text-danger">{errors?.email?.message}</small>
      </div>

      <div className="mb-3">
        <input
          className={`form-control ${
            errors?.phone?.message ? "is-invalid" : ""
          }`}
          type="text"
          {...register("phone", InputValidation.phone)}
          placeholder="Teléfono"
        />
        <small className="text-danger">{errors?.phone?.message}</small>
      </div>

      <div className="mb-3">
        <input
          id="date-picker"
          className={`form-control ${
            errors?.date?.message ? "is-invalid" : ""
          }`}
          type="text"
          {...register("date", InputValidation.date)}
          placeholder="Elegir Fecha"
        />
        <small className="text-danger">{errors?.date?.message}</small>
      </div>

      <div className="mb-3">
        <textarea
          className={`form-control ${
            errors?.message?.message ? "is-invalid" : ""
          }`}
          rows="5"
          {...register("message", InputValidation.message)}
          placeholder="Mensaje"
        ></textarea>
        <small className="text-danger">{errors?.message?.message}</small>
      </div>

      <div className="text-end">
        <ButtonLoad
          className="btn btn-secondary text-white fs-4 px-4"
          loader={loader}
          textLoader="Enviando"
          text={
            <>
              Enviar <FaArrowRight />
            </>
          }
        />
      </div>
    </form>
  )
}

export default Form
