import React, {useContext} from 'react'
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faLock, faLockOpen, faKey, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'

export default function Navbar() {
  const {totalCLP}=useContext(CartContext)
  const {user,setUser, logoutUser}=useContext(UserContext)

function logout(){
  logoutUser()
}
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg pink-bg fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <NavLink to='/' className="btn btn-outline-light"><FontAwesomeIcon icon={faPizzaSlice} /> Home</NavLink>
              </li>
              {user.logged===true?(
                <li className="nav-item">
              <NavLink to='/profile' className="btn btn-outline-light"><FontAwesomeIcon icon={faLockOpen} /> Profile</NavLink>
              </li>
            ):null}
               {!user.logged===true? (
                <li className="nav-item">
                <NavLink to='/login' className="btn btn-outline-light"><FontAwesomeIcon icon={faKey} /> Login</NavLink>
              </li>
            ): null }
               {!user.logged===true? (
                <li className="nav-item">
                <NavLink to='/register' className="btn btn-outline-light"><FontAwesomeIcon icon={faKey} /> Register</NavLink>
              </li>
            ):null}
              <li className="nav-item">
               <NavLink to='/cart' className="btn btn-outline-light"><FontAwesomeIcon icon={faCartShopping} /> Total: {totalCLP}</NavLink>
              </li>
              {user.logged===true?(
                  <li className="nav-item">
                <NavLink onClick={logout} to='' className="btn btn-outline-light"><FontAwesomeIcon icon={faLock} /> Logout</NavLink>
                </li>):null}
            </ul>
        </div>
       </div>
      </nav>
    </div>

  )
}
