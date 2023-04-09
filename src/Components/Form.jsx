import React from "react";
import { useState } from "react";


const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mostrarError, setMostrarError] = useState(false)
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.length < 5 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setMostrarError(true)
      setMostrarMensaje(false)
    } else {
      setMostrarError(false)
      setMostrarMensaje(true)
    }
  }

  return (
    <div>
      <form>
        <input placeholder="Name" type="text" onInput={(e) => setName(e.target.value)} />
        <input placeholder="Email" type="email" onInput={(e) => setEmail(e.target.value)} />
        <button onClick={(e) => handleSubmit(e)}>Send</button>
      </form>
      {mostrarMensaje &&
        <div >
          Gracias {name}, te contactaremos cuanto antes via email
        </div>
      }
      {
        mostrarError &&
        <div>
          Por favor verifique su información nuevamente
        </div>
      }
    </div>
  );
};

export default Form;
