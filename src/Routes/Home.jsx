import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([])
  const { theme } = useContext(ContextGlobal);

  const getDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json()
      })
    setDentists(data)
  }

  useEffect(() => {
    getDentists()
  })
  return (
    <main className={theme === 'dark' ? 'light' : 'dark'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentists) => {
        return (<Card key={dentists.id} name={dentists.name} id={dentists.id} username={dentists.username}/>)
          })
        }
      </div>
    </main>
  )
}

export default Home