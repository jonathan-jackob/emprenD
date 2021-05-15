/**
 * exporta objeto con las validaciones del formulario login
 */

export const InputValidation = {
  email: {
    required: {value: true, message: "El email es requerido"},
    maxLength: {value: 255, message: "Ingresa menos de 255 caracteres"},
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "El formato del email no es correcto, ejem@mail.com",
    },
  },
  password: {
    required: {value: true, message: "La contraseña es requerida"},
    minLength: {value: 8, message: "Ingresa mínimo 8 caracteres"},
  },
}
