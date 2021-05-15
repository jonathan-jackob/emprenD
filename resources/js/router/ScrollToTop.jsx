import {useEffect} from "react"
import {useLocation} from "react-router-dom"

/**
 * mueve la pantalla a la posición (0,0)
 * en cada cambio de ruta
 */
export default function ScrollToTop() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
