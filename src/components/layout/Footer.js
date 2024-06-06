import 'public/css/animation.css'
import SocialMedia from 'components/common/SocialMedia'
import Copyright from 'components/common/reusable/Copyright'

const Footer = ()  => {
    return (
        <footer className='mt-10 text-white block'>
            <Copyright />
            <SocialMedia />
        </footer>
    )
}

export default Footer