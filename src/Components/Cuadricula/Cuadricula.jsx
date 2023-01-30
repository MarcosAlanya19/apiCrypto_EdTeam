import usePetition from "../../Hooks/usePetition"
import Cripto from "../Cripto/Cripto"
import "./cuadricula.css"

function Cuadricula() {

  const [criptos] = usePetition("assets")

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="grid-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto
              key={id}
              name={name}
              priceUSD={priceUsd}
              symbol={symbol}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Cuadricula
