import './About.css';
import About_img from '../../assets/about.png'
import Play from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
    const handlePlayVideo = () => {
        setPlayState(true);
    };
    return (
        <div className='about' id='about'>
            <div className="about-left">
                <img src={About_img} alt='' className='about-img' />
                <img src={Play} alt="Play" className="play-icon" onClick={handlePlayVideo} />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nuturing Tomorrow's Leader Today</h2>
                <p> At Edu-Nexus, we are committed to providing a nurturing environment where students can thrive academically, socially, and personally. Our institution prides itself on a rich history of academic excellence, a diverse and inclusive community, and a dedication to innovation and research.</p>
                <p>We offer a wide range of programs designed to meet the needs and aspirations of our diverse student body. Whether you are looking to pursue undergraduate, graduate, or professional studies, our programs are tailored to provide you with the knowledge, skills, and experience needed to succeed in your chosen field.</p>
                <p>Our vision is to be a leading educational institution recognized for academic rigor, cutting-edge research, and a commitment to social responsibility. We strive to create a dynamic learning environment that fosters creativity, collaboration, and lifelong learning.</p> </div>
        </div>
    )
}

export default About
