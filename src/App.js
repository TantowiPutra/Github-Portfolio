import './App.css';
import Navbar from './components/layout/Navbar.js'
import Content from './components/layout/Content.js';
import Footer from './components/layout/Footer.js'
import Particle from './components/common/Particle.js';

function App() {
  return (
    <div className='grid grid-cols-1'>
        <Particle />
        <Navbar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
