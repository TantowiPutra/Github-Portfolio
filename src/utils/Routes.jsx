import { Routes, Route} from 'react-router-dom';
import NavbarData from '_data/NavbarData';
import Content from 'components/layout/Content.js';

const routes = () => {
    return (
        <Routes>
            {
                NavbarData.map(({id, href, component}) => (
                    <Route key={id} path={href} element={<Content component={component}/>}/>
                ))
            }
            
            <Route key={99} path="*" element={<Content />}/>
        </Routes>
    );
}

export default routes;