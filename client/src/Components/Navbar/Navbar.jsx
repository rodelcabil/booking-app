import React from 'react'
import './navbar-elements.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">rcbooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar