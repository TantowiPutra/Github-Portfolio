import './App.css';
import Particle from './components/common/Particle.js';
import Routes from 'utils/Routes';

import { SkeletonTheme } from 'react-loading-skeleton';
function App() {
  return (
    <>
      <SkeletonTheme baseColor="#475569" highlightColor="#64748b">
        <Particle /> 
        <Routes />
      </SkeletonTheme>
    </>
  );
}

export default App;
