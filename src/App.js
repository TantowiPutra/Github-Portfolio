import './App.css';
import Navbar from './components/Navbar.js'
import AboutMe from './components/AboutMe.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className='w-8/12 flex flex-col items-center'>
        <Navbar />
        <AboutMe />
        <Footer />
    </div>
  );
}

export default App;
