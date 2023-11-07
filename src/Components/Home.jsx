import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='Home'>
            <header>
                <h1>Home</h1>
                <p>Composant Home</p>
            </header>
            <div className='retour'>
                <Link to='/about'>go to About</Link>
            </div>
        </div>

    )
}
