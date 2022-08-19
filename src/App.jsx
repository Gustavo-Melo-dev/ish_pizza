import { useEffect, useState } from 'react'
import CardPizza from './components/cardPizza/cardPizza'
import TablePizza from './components/table/tablePizza'
import HeaderPage from './components/layout/header/header'
import './styles/global.css'

function App() {
  let [pizzas, setPizzas] = useState([])

  useEffect(() => {
    let getPizzas = async () => {
      const response = await fetch('../server/pizzas.json', {
        headers: {
          Accept: 'application/json'
        }
      })
      const data = await response.json()
      setPizzas(data)
      console.log(data)
    }
    getPizzas()
  }, [])

  return (
    <div className="App">
      <HeaderPage />
      <div className="catalog">
        <div className="title-catalog">
          <h2>Catálogo</h2>
        </div>
        <div className="app-body">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.name} name={pizza.name} price={pizza.price} />
          ))}
        </div>
      </div>
      <div className="request">
        <div className="title-request">
          <h2>Pedidos</h2>
          <div className="app-body">
            <TablePizza />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
