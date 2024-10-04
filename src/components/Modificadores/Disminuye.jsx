import React, {useContext,useState,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

const Disminuye = ({pizza}) => {
  const {cart, setCart}=useContext(CartContext)

  function ModificacionCant(id){
 
    const newAdd=cart.map(item =>{

      if(item.id===id && pizza.cantidad>1){
        return {...item, cantidad:pizza.cantidad-1}
      } else if (item.id===id && pizza.cantidad<=1) {
        return {...item, add:!item.add, cantidad:0}
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
      <button className="btn btn-link px-2" onClick={()=>ModificacionCant(pizza.id)}> <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  )
}

export default Disminuye
