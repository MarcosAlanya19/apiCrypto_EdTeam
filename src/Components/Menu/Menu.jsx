import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/UserContext"
import "./Menu.css"

const Menu = () => {
  const usuario = useContext(UserContext)
  const navigation = useNavigate()

  return (
    <nav className="main-menu">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
        <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
        <li>
          <a onClick={() => {
          localStorage.removeItem("tokenEdMarket")
          navigation("/login")
          }}>
            Cerrar Sesión
          </a>
        </li>
        {/* <li><a onClick={() => {
          localStorage.removeItem("tokenEDmarket")
          navigation("/login")
        }} >Cerrar sesión</a></li> */}
      </ul>
    </nav>
  )
}

export default Menu
