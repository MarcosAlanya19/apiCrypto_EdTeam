import { Navigate, Outlet } from "react-router-dom"
import Menu from "./Menu/Menu"

const App = () => {
  if(!localStorage.getItem("tokenEdMarket")) return <Navigate to={"/login"}/>

  return (
    <div className="app-container">
      <Menu/>
      <Outlet/>
    </div>
  )
}

export default App
