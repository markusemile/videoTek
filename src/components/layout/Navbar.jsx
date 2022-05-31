import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className=' mx-auto'>
            <div className="flex justify-center gap-5">
                <NavLink to="dashboard">Mes films</NavLink>
                <NavLink to="search">Chercher</NavLink>
                <NavLink to="profile">Mon Profil</NavLink>
            </div>
        </nav>
  )
}

export default Navbar