import {createContext,useEffect,useState} from 'react'

const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  const [totalCart,setTotalCart]=useState([])

  let total= cart.reduce((accumulator ,item) => {
    return accumulator += (parseInt(item.price)*parseInt(item.cantidad));
 }, 0)
 
 const totalCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)

  const getData = async () =>{
    const res= await fetch ("http://localhost:5000/api/pizzas")
    let data= await res.json()
    let newData=data.map(item =>({...item, cantidad:0, add:false}))
    setCart (newData)
    
  }

  useEffect (()=>{
    getData()
  },[])
  

  return <CartContext.Provider value={{cart,setCart,totalCart,setTotalCart,totalCLP}}>
    {children}
  </CartContext.Provider>
}

export {CartProvider, CartContext} 
