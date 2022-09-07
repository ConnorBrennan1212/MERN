import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
    <div>
        <ul className='nav-bar'>
            <li> <Link to={"/"}>Home</Link> </li>
            <li> <Link to={"aboutus"}></Link> About Us</li>
        </ul>
    </div>
    )
}

export default NavBar