import React from 'react'
import CardPizza from '../components/CardPizza/CardPizza'
import TablePizza from '../components/TablePizza/TablePizza'
import { useEffect, useState } from 'react'

const Index = () => {
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
    }
    getPizzas()
  }, [])

  return (
    <div className="App">
      <div className="catalog">
        <div className="title-catalog">
          <h2>Catálogo</h2>
        </div>
        <div className="app-body">
          {pizzas.map((pizza, key) => (
            <CardPizza key={pizza.name} name={pizza.name} price={pizza.price} pizza={pizza} id={key} />
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

export default Index