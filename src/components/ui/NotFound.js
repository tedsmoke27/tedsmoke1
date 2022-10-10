import React from 'react'
import notfound from './notfound.gif'

export default function NotFound() {
  return (
    <div>
        <h2>no pudimos encontrar la paginas</h2>
        <img 
            className="figure img img-fluid d-block"
            alt=""
            src={notfound}
        />
    </div>
  )
}
