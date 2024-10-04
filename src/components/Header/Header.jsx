import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div id="Header-id" className="text-light text-center py-5">
      <div className="container">
          <div className="ms-auto col-sm-12 col-md-12 text-wrap fondo-header">
              <h1 className="display-1 fw-bold my-5">
                  Pizzeria Mamma Mia
              </h1>
              <p className="my-5 fs-5">
                  Tenemos las mejores pizzas que podras encontrar!
              </p>
          </div>
      </div>
    </div>
  )
}
