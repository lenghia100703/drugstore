import DefaultLayout from '../layouts/DefaultLayout';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserInfo from '../pages/UserInfo';

const publicRoutes = [
    { path: '/', components: Home, layout: DefaultLayout },
    { path: '/login', components: Login, layout: DefaultLayout },
    { path: '/register', components: Register, layout: DefaultLayout },
    { path: '/user', components: UserInfo, layout: DefaultLayout },
    { path: '/cart', components: Cart, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
