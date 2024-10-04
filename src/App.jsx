import { useContext } from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { UserContext } from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.css'


import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import RegisterPage from './components/Form/RegisterPage'
import LoginPage from './components/Form/LoginPage'
import Navbar from './components/Navbar/Navbar'
import Pizza from './components/Cards/Pizza'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'


function App() {
  const {user}=useContext(UserContext)

  return (
    <div>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/pizzas/:id' element={<Pizza/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={!user.logged?<RegisterPage/>:<Navigate to="/"/>}></Route>
          <Route path='/login' element={!user.logged?<LoginPage/>:<Navigate to="/"/>}></Route>
          <Route path='/profile' element={user.logged ? <Profile/>:<Navigate to="/login"/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </CartProvider>


     <Footer/>
    </div>

  )
}

export default App
