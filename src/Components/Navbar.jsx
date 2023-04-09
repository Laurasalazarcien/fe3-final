import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {

  const { theme, setTheme } = useContext(ContextGlobal);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <nav>
      <Link to="/home">
        Home
      </Link>
      <Link to="/favs">
        Favorites
      </Link>
      <Link to="/contacto">
        Contact us
      </Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar