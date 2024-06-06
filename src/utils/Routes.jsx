import { Routes, Route} from 'react-router-dom';
import NavbarData from '_data/NavbarData';
import Content from 'components/layout/Content.js';

const routes = () => {
    const actNavbarData = NavbarData.filter((item) => (
        item.isActive ? item : ''
    ))

    let routesEntry = actNavbarData.map(({id, href, section}) => (
        <Route key={id} path={href} element={<Content section={section}/>}/>
    ))

    routesEntry = [
        ...routesEntry,
        <Route key={99} path="*" element={<Content section={actNavbarData[0].section}/>}/>
    ]

    return (
        <Routes>
            {routesEntry}            
        </Routes>
    );
}

export default routes;