import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='About'>
        <header>

        <h1>About</h1>
    <p>composant About</p>
        </header>
        <div className='retour'>
            
    <Link to='/'>Retour a la page d accuiel</Link>
        </div>
    </div>
  )
}
