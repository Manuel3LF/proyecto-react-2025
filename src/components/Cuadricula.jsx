import './Cuadricula.css'
import Cripto from "./cripto/Cripto"
import usePetition from "../hooks/usePetition"

function Cuadricula() {

const [criptos] = usePetition ('assets')

if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>

      <div className="cripto-container">
        { criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto
              key={id}
              name={name}
              priceUsd={priceUsd}
              symbol={symbol}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
        )) }
      </div>
    </div>
  )
}

export default Cuadricula
