import './App.css';
import Navbar from './components/layout/Navbar.js'
import Content from './components/layout/Content.js';
import Footer from './components/layout/Footer.js'

function App() {
  return (
    <div className='grid grid-cols-1'>
        <Navbar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
