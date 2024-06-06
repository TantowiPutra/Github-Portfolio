import { lazy } from 'react';

import './App.css';
import Particle from './components/common/Particle.js';
import Routes from 'utils/Routes';

function App() {
  return (
    <>
        <Particle /> 
        <Routes />
    </>
  );
}

export default App;
