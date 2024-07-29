import React from 'react'
import "./Testimonials.css"
import Next_icon from "../../assets/next-icon.png"
import Back_icon from "../../assets/back-icon.png"
import User1 from "../../assets/user-1.png"
import User2 from "../../assets/user-2.png"
import User3 from "../../assets/user-3.png"
import User4 from "../../assets/user-4.png"




const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img src={Next_icon} alt='' className='next-icon' />
            <img src={Back_icon} alt='' className='back-icon' />
            <div className="slider">

            </div>

        </div>
    )
}

export default Testimonials
