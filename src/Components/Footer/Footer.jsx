import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2024 Edu-Nexus. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;