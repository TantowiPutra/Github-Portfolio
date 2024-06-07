import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({ logo, url}) => {
    return ( 
        <a className='p-2 animate-bounce ' href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={logo} size="2x" />
        </a>
    )
}

export default SocialMedia;