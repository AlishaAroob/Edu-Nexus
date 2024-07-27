import React from 'react'
import "./Programs.css"
import Program1 from "../../assets/program-1.png"
import Program2 from "../../assets/program-2.png"
import Program3 from "../../assets/program-3.png"

const Programs = () => {
    return (
        <div className='Programs'>
            <div className="Program">
                <img src={Program1} alt='' />
                <img src={Program2} alt='' />
                <img src={Program3} alt='' />

            </div>
        </div>
    )
}

export default Programs;
