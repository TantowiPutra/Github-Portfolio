import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faMobile, faGear, faCertificate } from '@fortawesome/free-solid-svg-icons';
import AboutMe from 'components/section/AboutMe';
import Projects from 'components/section/Projects';
import TechStack from 'components/section/TechStack';
import Certifications from 'components/section/Certifications';
import ContactMe from 'components/section/ContactMe';

const NavbarData = [
    { 
        id: 1,
        isActive: true,
        name: 'About Me',   
        icon:<FontAwesomeIcon icon={faUser}/>, 
        href: '/about-me', 
        current: true,
        section: <AboutMe />
    },
    { 
        id: 2,
        isActive: true,
        name: 'Projects',   
        icon:<FontAwesomeIcon icon={faCoffee}/>, 
        href: '/projects', 
        current: false,
        section: <Projects />
    },
    { 
        id: 3,
        isActive: true,
        name: 'Tech Stack', 
        icon:<FontAwesomeIcon icon={faGear}/>, 
        href: '/tech-stack', 
        current: false,
        section: <TechStack />
    },
    { 
        id: 4,
        isActive: true,
        name: 'Certification', 
        icon:<FontAwesomeIcon icon={faCertificate}/>, 
        href: '/certification', 
        current: false,
        section: <Certifications />
    },
    { 
        id: 5,
        isActive: true,
        name: 'Contact Me', 
        icon:<FontAwesomeIcon 
        icon={faMobile}/>, 
        href: '/contact-me', 
        current: false,
        section: <ContactMe />
    },
]

export default NavbarData;