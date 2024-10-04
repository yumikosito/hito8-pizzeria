import React, {useContext, useState,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Aumenta = ({pizza}) => {
  const {cart, setCart}=useContext(CartContext)

  function ModificacionCant(id){

    const newAdd=cart.map(item =>{
      if(item.id===id){
        return {...item, cantidad:pizza.cantidad+1}
      }
      return item
    })
    setCart(newAdd)
  }

  useEffect (()=>{
    ModificacionCant()
  },[])

  return (
    <div>
      <button className="btn btn-link px-2" onClick={()=>ModificacionCant(pizza.id)}> <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default Aumenta
