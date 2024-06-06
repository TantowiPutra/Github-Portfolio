import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faMobile, faGear, faCertificate } from '@fortawesome/free-solid-svg-icons';
import AboutMe from 'components/sections/AboutMe/AboutMe';
import Projects from 'components/sections/Projects/Projects';
import TechStack from 'components/sections/TechStack/TechStack';
import Certifications from 'components/sections/Certifications/Certifications';
import ContactMe from 'components/sections/ContactMe/ContactMe';

const NavbarData = [
    { 
        id: 1,
        name: 'About Me',   
        icon:<FontAwesomeIcon icon={faUser}/>, 
        href: '/about-me', 
        current: true,
        component: <AboutMe />
    },
    { 
        id: 2,
        name: 'Projects',   
        icon:<FontAwesomeIcon icon={faCoffee}/>, 
        href: '/projects', 
        current: false,
        component: <Projects />
    },
    { 
        id: 3,
        name: 'Tech Stack', 
        icon:<FontAwesomeIcon icon={faGear}/>, 
        href: '/tech-stack', 
        current: false,
        component: <TechStack />
    },
    { 
        id: 4,
        name: 'Certification', 
        icon:<FontAwesomeIcon icon={faCertificate}/>, 
        href: '/certification', 
        current: false,
        component: <Certifications />
    },
    { 
        id: 5,
        name: 'Contact Me', 
        icon:<FontAwesomeIcon 
        icon={faMobile}/>, 
        href: '/contact-me', 
        current: false,
        component: <ContactMe />
    },
]

export default NavbarData;