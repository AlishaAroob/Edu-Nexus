import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import Menu from "../../assets/menu-icon.png"

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <div className='start'>
                <img src={Logo} alt="Logo" className='logo' />
                <h1>EDU-NEXUS</h1>
                <img src={Menu} alt='' className="bx bx-menu" id="menu-icon" onClick={toggleMenu} />
            </div>
            <ul className={menuOpen ? 'show' : ''}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Programs</Link></li>
                <li><Link to='about' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
