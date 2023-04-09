import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={theme === 'dark' ? 'light' : 'dark'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact