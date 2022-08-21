import React, { useEffect, useState } from 'react'
import './style.css'
import { Table } from 'reactstrap';
import { FaRegTrashAlt } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';

const table = () => {
    let [pizzas, setPizzas] = useState([])

    useEffect(() => {
        let getPizzasTable = async () => {
            let response = await fetch('http://127.0.0.1:8000/')
            let data = await response.json()
            setPizzas(data)
        }
        getPizzasTable()
    }, [])

    let deletePizza = async (id) => {
        await fetch(`http://127.0.0.1:8000/${id}`, {
            method: 'DELETE',
        })
        toast.success("Pedido cancelado com sucesso!")
        setPizzas(pizzas.filter(pizza => pizza.id !== id))
    }

    return (
        <div className="app-table">
            <Table hover xs="12">
                <thead className='head-table'>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Pizza</th>
                        <th className="table-mobile">Preço</th>
                        <th className="table-mobile">Quantidade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody
                    className='body-table'>
                    {
                        pizzas.map((pizza) => (
                            <tr key={pizza.id}>
                                <td>{pizza.id}</td>
                                <td>{pizza.name}</td>
                                <td>{pizza.name_pizza}</td>
                                <td className="table-mobile">{pizza.price}</td>
                                <td className="table-mobile">{pizza.quantity}</td>
                                <td>
                                    <FaRegTrashAlt onClick={() => { deletePizza(pizza.id) }} />
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
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default table