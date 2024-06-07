import SocmedData from '_data/SocmedData'
import SocialMediaWrapper from './SocialMediaWrapper'

const SocialMedia = () => {
    return (
        <div className='flex flex-row justify-center'>
            {
                SocmedData.map((item) => (
                    <SocialMediaWrapper
                        key={item.url}
                        logo={item.logo}
                        url={item.url}
                    />
                ))
            }
        </div>
    )
}

export default SocialMedia