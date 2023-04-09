import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import doctor from '../Assets/doctor.jpg'

const Card = ({ name, username, id }) => {

  const initialState = { favs: [] };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_FAV':
        const newFav = action.payload;
        // Verificamos si el objeto ya existe en el array de favoritos
        const isDuplicate = state.favs.some(fav => fav.id === newFav.id);
        if (isDuplicate) {
          return state;
        }
        const newFavs = [...state.favs, newFav];
        localStorage.setItem('favs', JSON.stringify(newFavs));
        return { ...state, favs: newFavs };
      case 'REMOVE_FAV':
        const updatedFavs = state.favs.filter(fav => fav.id !== action.payload);
        localStorage.setItem('favs', JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
      case 'INITIALIZE_FAVS':
        return { ...state, favs: action.payload };
      default:
        return state;
    }
  }, initialState);

  const handleAddToFavs = (item) => {
    dispatch({ type: 'ADD_FAV', payload: item });
  };

  useEffect(() => {
    const favsList = JSON.parse(localStorage.getItem('favs')) || [];
    dispatch({ type: 'INITIALIZE_FAVS', payload: favsList });
  }, []);

  return (
    <div className="card">
      <img src={doctor} alt={name} width='200px' />

      <Link to={'/dentist/' + id}>{name}</Link>
      <Link to={'/dentist/' + id}>{username}</Link>
      <button className="favButton" onClick={() => { handleAddToFavs({ name, username, id }) }}>Add fav</button>
    </div>
  );
};

export default Card;
