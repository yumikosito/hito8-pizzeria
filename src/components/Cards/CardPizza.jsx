import React, {useEffect, useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faEye, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../../index.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CardPizza = (pizza) => {
  const precioFormat= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(pizza.price)
  const navigate=useNavigate()
  const {cart, setCart}=useContext(CartContext)
  const [count,setCount]=useState(parseInt(pizza.cantidad))

  const addCart=(id)=> {
    setCount(count+1)
  
    const newAdd=cart.map(cartN =>{
      if(cartN.id===id){
        return {...cartN,cantidad:count, add:true}
      }
      return cartN
    })
    setCart(newAdd)
  }

const handleClick = (id) =>{
  navigate(`/pizzas/${id}`)
}

  useEffect (()=>{
    addCart()
  },[])


  return (
    <div>
        <div className="card pizza">
          <img src={pizza.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className='d-flex flex-row'>
            <FontAwesomeIcon icon={faPizzaSlice} />
            <h5 className="card-title p-1">{pizza.name}</h5>
            </div>
            {/* <p className="card-text">Descripcion: {pizza.desc}</p>

            <p className="card-text">Ingredientes:</p>
            <ul >
                {pizza.ingredients ? pizza.ingredients.map((ingredient, index) => ( <li key={index}>{ingredient}</li>)) : null}
              </ul> */}

            <p className="card-text">Precio: {precioFormat}</p>
            <div className='d-flex flex-row justify-content-between'>
              <button onClick={()=>handleClick(pizza.id)} className="btn btn-primary">Ver mas <FontAwesomeIcon icon={faEye} /></button>
              <a onClick={()=>addCart(pizza.id)} className="btn btn-primary">Agregar <FontAwesomeIcon icon={faCartShopping} /> </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardPizza
