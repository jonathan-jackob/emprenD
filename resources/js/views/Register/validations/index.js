export const InputValidation = {
  name: {
    required: {value: true, message: "El nombre es requerido"},
    maxLength: {value: 255, message: "Ingresa menos de 255 caracteres"},
  },
  email: {
    required: {value: true, message: "El email es requerido"},
    maxLength: {value: 25, message: "Ingresa menos de 255 caracteres"},
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
