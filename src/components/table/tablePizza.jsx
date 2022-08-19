import React from 'react'
import './style.css'
import { Table } from 'reactstrap';

const table = () => {
    return (
        <div className="app-table">
            <Table hover xs="12">
                <thead className='head-table'>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Pizza</th>
                        <th>Preço</th>
                        <th className="table-mobile">Ação</th>
                    </tr>
                </thead>
                <tbody className='body-table'>
                    <tr>
                        <td>1</td>
                        <td>Mark Crugger</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className="table-mobile">@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob Crugger</td>
                        <td>Mark</td>
                        <td>Thornton</td>
                        <td className="table-mobile">@fat</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default table