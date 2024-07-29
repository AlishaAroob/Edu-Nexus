import React, { useRef } from 'react';
import "./Testimonials.css";
import Next_icon from "../../assets/next-icon.png";
import Back_icon from "../../assets/back-icon.png";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={Next_icon} alt='Next' className='next-icon' onClick={slideForward} />
            <img src={Back_icon} alt='Back' className='back-icon' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User1} alt='User 1' />
                                <div>
                                    <h3>Lisa Jackson</h3>
                                    <span>Edu-Nexus, USA</span>
                                </div>
                            </div>
                            <p>Graduating from Edu-Nexus was a transformative experience. The supportive faculty prepared me well for my career. I'm proud to be an Edu-Nexus alumnus and grateful for the opportunities I received.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User2} alt='User 2' />
                                <div>
                                    <h3>Daniel Coinburn</h3>
                                    <span>Edu-Nexus, USA</span>
                                </div>
                            </div>
                            <p>Edu-Nexus provided me with a solid foundation for my future. The engaging courses and dedicated instructors made learning enjoyable and impactful. I'm proud to be part of the Edu-Nexus community.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User3} alt='User 3' />
                                <div>
                                    <h3>Tehlia Chirambo</h3>
                                    <span>Edu-Nexus, USA</span>
                                </div>
                            </div>
                            <p>Attending Edu-Nexus was one of the best decisions of my life. The hands-on learning and supportive environment gave me the skills and confidence to succeed in my career. I am grateful for the experience.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User4} alt='User 4' />
                                <div>
                                    <h3>Martin Rogue</h3>
                                    <span>Edu-Nexus, USA</span>
                                </div>
                            </div>
                            <p>Edu-Nexus exceeded my expectations in every way. The faculty's commitment to student success and the enriching campus life made my time here unforgettable. I highly recommend Edu-Nexus to future students.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
