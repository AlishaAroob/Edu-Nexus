import React from 'react'
import "./Hero.css"
import darkarrow from "../../assets/dark-arrow.png"

const Hero = () => {
    return (
        <div className="hero container" id='hero'>
            <div className="hero-text">
                <h1>we ensure better education for better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education </p>
                <button className="btn1">Explore more<img src={darkarrow} alt='' /></button>
            </div>
        </div>
    )
}

export default Hero
