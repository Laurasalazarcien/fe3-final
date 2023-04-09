import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {

  const [singleDentists, setSingleDentists] = useState([])
  const paramsForDentists = useParams()
  const { theme } = useContext(ContextGlobal);

  const getSingleDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + paramsForDentists.id)
      .then((response) => {
        return response.json()
      })
    setSingleDentists(data)
  }

  useEffect(() => {
    getSingleDentists()
  })

  return (
    <main className={theme === 'dark' ? 'light' : 'dark'}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{singleDentists.name}</td>
            <td>{singleDentists.email}</td>
            <td>{singleDentists.phone}</td>
            <td>{singleDentists.website}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Detail