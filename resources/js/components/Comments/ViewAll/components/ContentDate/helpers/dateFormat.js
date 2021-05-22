/**
 * recibe una fecha valida y la convierte a un formato
 * como el siguiente dd/mm/yy hh:mm:ss
 *
 * @param {string} dateString fecha valida
 * @returns cadena con la fecha formateada
 */
export const dateFormat = (dateString) => {
  const date = new Date(dateString)

  const YY = removeTwoDigits(date.getFullYear()) //año
  const MM = addCero(date.getMonth() + 1) //mes
  const DD = addCero(date.getDate()) //dia

  const hh = date.getHours() //hora
  const mm = addCero(date.getMinutes()) //minutos
  const ss = addCero(date.getSeconds()) //segundos

  return `${DD}/${MM}/${YY} ${hh}:${mm}:${ss}`
}

/**
 * retorna una cadena con un 0 al inicio si el numero que recibe es menor a 10
 *
 * @param {number} value
 * @returns
 */
const addCero = (value) => (value > 10 ? value : "0" + value)

/**
 * retorna los últimos 2 dígitos de un año recibido con 4 dígitos
 *
 * @param {number} year
 * @returns
 */
const removeTwoDigits = (year) => {
  const cadena = String(year)
  return cadena.substr(2, 3)
}
