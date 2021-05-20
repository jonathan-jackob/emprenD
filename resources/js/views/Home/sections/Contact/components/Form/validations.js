/**
 * exporta objeto con las validaciones del formulario contacto
 */

export const InputValidation = {
  name: {
    required: {value: true, message: "El nombre es requerido"},
  },
  email: {
    required: {value: true, message: "El email es requerido"},
    maxLength: {value: 255, message: "Ingresa menos de 255 caracteres"},
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "El formato del email no es correcto, ejem@mail.com",
    },
  },
  phone: {
    pattern: {
      value: /^[\d]{10}$/,
      message: "Ingrese un teléfono correcto, ej. 3312345678",
    },
  },

  date: {
    pattern: {
      value:
        /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      message: "Formato de fecha incorrecto, dd/mm/yyyy",
    },
  },

  message: {
    required: {
      value: true,
      message: "El mensaje es requerido",
    },
  },
}
