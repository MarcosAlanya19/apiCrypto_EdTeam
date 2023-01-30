import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {
  const [data, setData] = useState()
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)

    axios.get(`${import.meta.env.VITE_API_URL}${endpoint}`)
      .then(data => {
        setData(data.data.data)
        setCargando(false)
      })
      .catch(() => {
        setCargando(false)
        console.error("No se encontro")
      })
  },[])

  return [data, cargando]
}

export default usePetition;
