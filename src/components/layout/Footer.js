import 'public/css/animation.css'
import SocialMedia from 'components/common/SocialMedia'
import Copyright from 'components/common/reusable/Copyright'

const Footer = ()  => {
    return (
        <footer className='w-[100%] text-white block mt-[30px]'>
            <Copyright />
            <SocialMedia />
        </footer>
    )
}

export default Footer