import React, { useState, useContext } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import useInput from '../Hooks/useInput'

const LoginPage = () => {
  const {user,setUser, loginUser}=useContext(UserContext)
  const email=useInput("")
  const password=useInput("")

  
  const handleSubmit = async (e)=> {
    e.preventDefault()
  
    try {
      loginUser({'email': email.value, password: password.value});
      
    
    } catch (error) {
      console.log("error =>", error);
      
    }
    

    // const search=user.find (mail => mail.email===email)
    
    // if (
    //   // password===search.password &&
    //   password.length>=6){
    //   alert("Autentificacion correcta")
    //   setUser(true)


    // } else if (password.length<6) {
    //   alert("Contrasena tiene que tener 6 caracteres minimo")
    // } else{
    //   alert("Contrasena no coincide")
    // }
  }



  return (
    <div className='vw-100 d-flex align-items-center p-3 flex-column'>
      <Header/>
      <div className='mt-5'>
        <h3>Inicio Sesion</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label> <br/>
          <input type="text" id='email' name='email' {...email}/>
          <br/>
          <label htmlFor="password">Contrasena</label><br/>
          <input type="text" id='password' name='password' {...password}/>
          <br/>
          <button type='submit' className="btn btn-info"> Enviar </button>
        </form>
      </div>

    </div>
  )
}

export default LoginPage
