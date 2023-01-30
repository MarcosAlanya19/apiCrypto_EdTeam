import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './Components/App'
import CriptoPage from './Components/Cripto/CriptoPage'
import Cuadricula from "./Components/Cuadricula/Cuadricula"
import Page404 from './Components/Page404'
import Login from './Components/Usuarios/Login'
import Perfil from './Components/Usuarios/Perfil'
import { UserContextProvider } from './Context/UserContext'
import Home from './Home'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='perfil' element={<Perfil/>}/>
          </Route>
          <Route path='/criptomonedas' element={<App/>}>
            <Route index element={<Cuadricula/>}/>
            <Route path=':id' element={<CriptoPage/>} />
          </Route>
          <Route path='/login' element={<Login/>}>

          </Route>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
)
