import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo.png"

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <ul>
                <li>Home </li>
                <li>program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar
