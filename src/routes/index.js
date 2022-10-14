import DefaultLayout from '../layouts/DefaultLayout';
import SidebarLayout from '../layouts/SidebarLayout';
import Address from '../pages/Address';
import Cart from '../pages/Cart';
import HistoryOrder from '../pages/HistoryOrder';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Password from '../pages/Password';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ShopDetals from '../pages/ShopDetals';

const publicRoutes = [
    { path: '/', components: Home, layout: DefaultLayout },
    { path: '/login', components: Login, layout: DefaultLayout },
    { path: '/register', components: Register, layout: DefaultLayout },
    { path: '/user', components: Profile, layout: SidebarLayout },
    { path: '/password', components: Password, layout: SidebarLayout },
    { path: '/address', components: Address, layout: SidebarLayout },
    { path: '/cart', components: Cart, layout: DefaultLayout },
    { path: '/history-order', components: HistoryOrder, layout: DefaultLayout },
    { path: '/nha-thuoc-ecopharmaceuticals', components: ShopDetals, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
