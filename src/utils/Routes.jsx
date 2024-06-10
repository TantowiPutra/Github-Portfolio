import { Routes, Route} from 'react-router-dom';
import NavbarData from '_data/Navbar';
import Content from 'components/layout/Content.js';

const routes = () => {
    // Filter, only active menu is taken
    const actNavbarData = NavbarData.filter((item) => (
        item.isActive ? item : ''
    ))

    // Create entry for all active Navbar Menus
    let routesEntry = actNavbarData.map(({id, href, section}) => (
        <Route key={id} path={href} element={<Content href={href} section={section}/>}/>
    ))

    // URL not found
    routesEntry = [
        ...routesEntry,
        <Route key={99} path="*" element={<Content currHref={actNavbarData[0].href} section={actNavbarData[0].section}/>}/>
    ]

    return (
        <Routes>
            {routesEntry}            
        </Routes>
    );
}

export default routes;