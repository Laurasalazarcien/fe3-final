import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([])
  const { theme } = useContext(ContextGlobal);

  const getFavs = () => {
    const favDentists = JSON.parse(localStorage.getItem('favs'))
    setFavs(favDentists || []);
  }

  useEffect(() => {
    getFavs()
  }, [])

  return (
    <main className={theme === 'dark' ? 'light' : 'dark'}>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {favs.map((dentists) => {
          return (<Card key={dentists.id} name={dentists.name} id={dentists.id} username={dentists.username} />)
        })
        }
      </div>
    </main>
  );
};

export default Favs;
