import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const formPizza = () => {
  let params = useParams()
  let pizzaId = params.id
  let [pizza, setPizza] = useState({ name_pizza: '', price: '', name: '', quantity: '' })

  useEffect(() => {
    let getPizza = async () => {
      let response = await fetch(`../server/pizzas.json`)
      let data = await response.json()
      console.log(data)
      setPizza({
        name_pizza: data[pizzaId].name,
        price: data[pizzaId].price
      })
    }
    getPizza()
  }, [pizzaId])

  let clearText = () => {
    var elements = document.getElementsByName("clearText");
    elements.forEach(element => {
      console.log(element);
      element.value = '';
    })
  }

  let submitData = async () => {
    try {
      if(pizza.quantity > 2){
        pizza.price = pizza.price - (pizza.price * 0.3)
      }
      console.log(pizza.price)
      await fetch(`http://127.0.0.1:8000/pedir-pizza/${pizzaId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": pizza.name,
          "name_pizza": pizza.name_pizza,
          "price": parseFloat(pizza.price * pizza.quantity),
          "quantity": pizza.quantity
        }),
      })
      let response = await fetch('../../../server/order.json')
      let data = await response.json()
      let timeRequest = (data.deliveryTime / 1000) / 60
      clearText()
      toast.success("Seu pedido será entregue em " + timeRequest + " minutos!")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className="title-form d-flex justify-content-center my-4">
        <h2>Peça já sua pizza!!!</h2>
      </div>
      <form method="POST" id="form-pizza">
        <div className="container p-5 d-flex justify-content-center">
          <div className="input-forms col-md-6">
            <div className="col">
              <div className="mb-3">
                <label className="form-label label_form" style={{color: 'white'}}>Tipo da Pizza</label>
                <input type="text" className="form-control" name="name_pizza" id="name_pizza" value={pizza.name_pizza} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label label_form" style={{color: 'white'}}>Preço</label>
                <input type="text" className="form-control" id="price" name="price" value={pizza.price} readOnly />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label label_form" style={{color: 'white'}}>Nome do Cliente</label>
                <input type="text" className="form-control" id="name" name="clearText" onChange={(e) => { setPizza({ ...pizza, 'name': e.target.value }) }} placeholder="Digite seu nome..." />
              </div>
              <div className="mb-3">
                <label className="form-label label_form" style={{color: 'white'}}>Quantidade</label>
                <input type="number" className="form-control" name="clearText" id="quantity" onChange={(e) => { setPizza({ ...pizza, 'quantity': e.target.value }) }} placeholder="Digite a quantidade..." />
              </div>
            </div>
            <button type="button" onClick={submitData} className="btn btn-dark">Deliciar-se</button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </form>
      <div className="go-back d-flex justify-content-center">
        <Link to={'/'}>
          <button type="button" className="btn btn-warning">Voltar</button>
        </Link>
      </div>
    </div>
  )
}

export default formPizza