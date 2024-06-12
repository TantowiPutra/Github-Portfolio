import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faMobile, faGear, faCertificate, faDownload } from '@fortawesome/free-solid-svg-icons';
import AboutMe from 'components/section/AboutMe';
import Projects from 'components/section/Projects';
import TechStack from 'components/section/TechStack';
import Certifications from 'components/section/Certifications';
import ContactMe from 'components/section/ContactMe';

const NavbarData = [
    { 
        id: 1,
        isActive: true,
        isRoute: true,
        name: 'About Me',   
        icon:<FontAwesomeIcon icon={faUser}/>, 
        href: '/about-me', 
        section: <AboutMe />,
        title: '',
        warning: '',
        btnText: "",
    },
    { 
        id: 2,
        isActive: true,
        isRoute: true,
        name: 'Projects',   
        icon:<FontAwesomeIcon icon={faCoffee}/>, 
        href: '/projects', 
        section: <Projects />,
        title: '',
        warning: '',
        btnText: "",
    },
    { 
        id: 3,
        isActive: true,
        isRoute: true,
        name: 'Tech Stack', 
        icon:<FontAwesomeIcon icon={faGear}/>, 
        href: '/tech-stack', 
        section: <TechStack />,
        title: '',
        warning: '',
        btnText: "",
    },
    { 
        id: 4,
        isActive: false,
        isRoute: true,
        name: 'Certification', 
        icon:<FontAwesomeIcon icon={faCertificate}/>, 
        href: '/certification', 
        section: <Certifications />
    },
    { 
        id: 5,
        isActive: false,
        isRoute: true,
        name: 'Contact Me', 
        icon:<FontAwesomeIcon 
        icon={faMobile}/>, 
        href: '/contact-me', 
        section: <ContactMe />,
        title: '',
        warning: '',
        btnText: "",
    },
    {
        id: 6,
        isActive: true,
        isRoute: false,
        name: 'Download CV',
        icon:<FontAwesomeIcon 
        icon={faDownload}/>, 
        href: 'https://drive.google.com/file/d/1EMAYwi6dfObopVYblpcI-dfTvwNXfAtB/view?usp=sharing', 
        section: <ContactMe />,
        title: 'Download CV',
        warning: 'Are you sure you want to download the CV?',
        btnText: "Download",
    }
]

export default NavbarData;