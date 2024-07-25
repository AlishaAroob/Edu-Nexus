import React from "react"
import "./Navbar.css"
import Logo from "../../assets/Logo.png"

const Navbar = () => {
    return (
        <nav className="container">
            <img src={Logo} alt="" className='logo' />
            <h1>EDU-NEXUS</h1>
            <ul>
                <li>Home </li>
                <li>program</li>
                <li>About Us</li>
                <li>Testimonials</li>
                <li><button className="btn">Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
