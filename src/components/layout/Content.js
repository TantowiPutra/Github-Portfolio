import Heading from 'components/layout/Heading';
import Navbar from 'components/layout/Navbar.js'
import Footer from 'components/layout/Footer.js'

const Content = ({ href, section }) => {
    return (
        <>
            <header className='w-full'>
                <Heading />
                <Navbar currHref={href}/>
            </header>

            <main className='container mx-auto'>
                { section }
            </main>
            
            <Footer />
        </>
    )
}

export default Content