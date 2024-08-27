import './App.css';
import { Route, HashRouter, Routes } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import Content from './components/layout/Content';
import Particle from './components/common/Particle';

import NavbarData from '_data/Navbar';

function App() {
  const actNavbarData = NavbarData.filter((item) => item.isActive);

  return (
    <SkeletonTheme baseColor="#475569" highlightColor="#64748b">
      <Particle />
      <HashRouter>
        <Routes>
          {actNavbarData.map(({ id, href, section }) => (
            <Route key={id} path={href} element={<Content href={href} section={section} />} />
          ))}
          {/* URL not found */}
          <Route path="*" element={<Content currHref={actNavbarData[0]?.href} section={actNavbarData[0]?.section} />} />
        </Routes>
      </HashRouter>
    </SkeletonTheme>
  );
}

export default App;
