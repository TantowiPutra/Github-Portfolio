import Navbar from 'components/layout/Navbar.js'
import Footer from 'components/layout/Footer.js'

const Content = ({ section }) => {
    return (
        <div id='content' name='content' className="h-3/4 w-full flex flex-col items-center">
            <Navbar />
            { section }
            <Footer />
        </div>
    )
}

export default Content