import React, {useEffect, useState,useContext} from 'react'
import Header from '../Header/Header'
import CardPizza from '../Cards/CardPizza'
import { CartContext } from '../../context/CartContext'


export default function Home() {
  const {cart}=useContext(CartContext)

  return (
    <div className='vw-100 pt-5'>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          {cart.map(item=> (
            <div className='col-md-4 col-xs-12'>
              <CardPizza key={item.id} id={item.id} name={item.name} price={item.price} ingredients={item.ingredients} img={item.img} desc={item.desc} cantidad={item.cantidad}/>
            </div>))}
        </div>
      </div>
    </div>
  )
}
