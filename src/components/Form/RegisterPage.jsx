import React, { useState, useContext, useEffect } from 'react'
import Header from '../Header/Header'
import { UserContext } from '../../context/UserContext'
import useInput from '../Hooks/useInput'

const RegisterPage = () => {
  const email=useInput("")
  const password=useInput("")
  const passConfirm=useInput("")
  const {registerUser}=useContext(UserContext)
  // const [email, setEmail] = useState("")
  // const [password, setPasword] = useState("")
  // const [passConfirm, setPassConfirm] = useState("")

  const handleSubmit = (e)=> {
    console.log(email,password,passConfirm);
    
    e.preventDefault()
    if (password.value===passConfirm.value && password.value.length>=6){
      registerUser({'email': email.value, password: password.value})

    } else if (password.value.length<6) {
      alert("Contrasena tiene que tener 6 caracteres minimo")
    } else{
      alert("Contrasenas no son iguales")
    }
  }
  


  return (
    <div className='vw-100 d-flex align-items-center p-3 flex-column'>
      <Header/>
      <div className='mt-3'>
        <h3>Registro</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label> <br/>
          <input type="text" id='email' name='email' {...email}/>
          <br/>
          <label htmlFor="password">Contrasena</label><br/>
          <input type="text" id='password' name='password' {...password}/>
          <br/>
          <label htmlFor="passConfirm" >Confirmacion Contrasena</label><br/>
          <input type="text" id='passConfirm' name='passConfirm' {...passConfirm}/>
          <br/>
          <button type='submit' className="btn btn-info"> Enviar </button>
        </form>
      </div>

    </div>
  )
}

export default RegisterPage
