import 'public/css/animation.css'
import SocialMedia from '../common/SocialMedia'
import SocmedData from '_data/SocmedData'



const Footer = ()  => {
    return (
        <footer className='mt-10 text-white block'>
            <div className='text-center w-100 font-bold w-100'>
                COPYRIGHT &copy;2024 TANTOWI PUTRA
            </div>

            <div className='flex flex-row justify-center'>
                {
                    SocmedData.map((item) => (
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