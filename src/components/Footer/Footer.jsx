import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
      <div className='container-fluid wv-100'>
        <div className="pink-bg text-center text-light p-4">
            <h4 className="text-center fw-bold">Contactanos</h4>
            <div className="row d-flex justify-content-center">
              <a href="" className="col-md-4"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="" className="col-md-4"><FontAwesomeIcon icon={faPhone} /></a>
          </div>
          <p className="mb-0">© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  )
}
