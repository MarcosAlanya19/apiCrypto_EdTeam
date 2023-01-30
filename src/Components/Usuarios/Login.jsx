import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigation = useNavigate()
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const submit = (e) => {
    e.preventDefault();
    setCargando(true)
    setError(null)

    axios.post(`https://reqres.in/api/login`, user)
      .then(data => {
        localStorage.setItem("tokenEdMarket", data.data.token)
        navigation("/")
        setCargando(false)
      })
      .catch(err => {
        console.error(err)
        setCargando(false)
        setError(err.response.data.error)
      })
  }

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico:</label>
          <input required onChange={({target}) => {
            setUser({
              ...user,
              email: target.value
            });
          }} type="email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="current-password">Contraseña:</label>
          <input required onChange={({target}) => {
            setUser({
              ...user,
              password: target.value
            });
          }} type="password" name="current-password" />
        </div>
        <div className="submit">
          <input type="submit" value={cargando ? "Cargando..." : "Ingresar"} />
        </div>
      </form>

      { error && <span className="error">Error: {error}</span>}
    </div>
  )
}

export default Login
