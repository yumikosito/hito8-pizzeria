import React from 'react'
import Graha from "../../assets/img/GrahaPizza.jpg"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import '../../index.css'

const NotFound = () => {
  return (
    <div className='vw-100 pt-5'>
      <h2 className='center pt-5'>G'raha Tia se comio las pizzas de esta pagina :c </h2><br/>
      <h4 className='center'>Pero si apretas el boton puedes regresar al inicio por las tuyas</h4><br/>

      <Link to='/' className="d-flex justify-content-center btn btn-outline-danger mx-5"><FontAwesomeIcon icon={faPizzaSlice} /> Home</Link><br/>
      <div className=' d-flex justify-content-center p-5'>
       <img  src={Graha} alt="" />
      </div>
      
    </div>
  )
}

export default NotFound
