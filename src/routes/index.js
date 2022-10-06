import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';

const publicRoutes = [{ path: '/', components: Home, layout: DefaultLayout }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
