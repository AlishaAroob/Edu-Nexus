import React from 'react'
import "./Contact.css"
import Msg_icon from "../../assets/msg-icon.png"
import Mail from "../../assets/mail-icon.png"
import Phone from "../../assets/phone-icon.png"
import Location from "../../assets/location-icon.png"
import White_icon from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c167a8bf-fbb0-403a-a640-08ac45c295c9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();

        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={Msg_icon} alt='' /></h3>
                <p>At Edu-Nexus, we are dedicated to providing you with the best educational experience and support. Feel free to reach out to us through any of the following methods:

                </p>
                <ul>
                    <li><img src={Mail} alt='' />Email: info@edunexus.edu</li>
                    <li><img src={Phone} alt='' />Phone: +1 (123) 456-7890</li>
                    <li><img src={Location} alt='' />Address:
                        Edu-Nexus University
                        123 Education Lane
                        Cityville, State, 12345
                        USA</li>
                    <li>Office Hours: Monday to Friday, 9:00 AM - 5:00 PM</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Enter your name ' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your phone number ' required />
                    <label>Message</label>
                    <textarea name='message' placeholder='Enter your message here ' rows="6" required />
                    <button className='btn1 dark-btn'>Submit Now <img src={White_icon} alt='' /> </button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
