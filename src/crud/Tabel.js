import React from 'react'
import {Table} from 'react-bootstrap'

const Tabel = ({makanan, editData, hapusData}) => {
    return ( 
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nama Makanan</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th> Aksi</th>
                </tr>
            </thead>
            <tbody>
                
                    {makanan.map((makanan, index) => {
                        return (
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{makanan.nama}</td>
                            <td>{makanan.deskripsi}</td>
                            <td>{makanan.harga}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => editData(makanan.id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>Delete</button>

                            </td>
                            </tr>
                        )
                    })}
            </tbody>
            </Table>
        </div>
    )
}

export default Tabel
