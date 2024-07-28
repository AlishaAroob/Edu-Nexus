import React from 'react'
import "./Programs.css"
import Program1 from "../../assets/program-1.png"
import Program2 from "../../assets/program-2.png"
import Program3 from "../../assets/program-3.png"
import Programicon1 from "../../assets/program-icon-1.png"
import Programicon2 from "../../assets/program-icon-2.png"
import Programicon3 from "../../assets/program-icon-3.png"


const Programs = () => {
    return (
        <div className="Programs">
            <div className="Program">
                <img src={Program1} alt='' />
                <div className="caption">
                    <img src={Programicon1} alt='' />
                    <p>Bachelors Degree</p>
                </div>
            </div>
            <div className="Program">
                <img src={Program2} alt='' />
                <div className="caption">
                    <img src={Programicon2} alt='' />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="Program">
                <img src={Program3} alt='' />
                <div className="caption">
                    <img src={Programicon3} alt='' />
                    <p>Post-Graduation </p>
                </div>
            </div>

        </div>
    )
}

export default Programs;
