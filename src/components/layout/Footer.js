import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialMedia from '../common/SocialMedia'

const socmed_list = [
    {
        logo: faLinkedin,
        url : "https://www.linkedin.com/in/tantowi-putra-agung-setiawan-620037251/"
    },

    {
        logo: faGithub,
        url : "https://github.com/TantowiPutra"
    },
];

const Footer = ()  => {
    return (
        <footer className='text-white block'>
            <div className='text-center w-100 font-bold w-100'>
                COPYRIGHT &copy;2024 TANTOWI PUTRA
            </div>

            <div className='flex flex-row justify-center'>
                {
                    socmed_list.map((item) => (
                        <SocialMedia
                            key={item.url}
                            logo={item.logo}
                            url={item.url}
                        />
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer