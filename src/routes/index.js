import CartLayout from '../layouts/CartLayout';
import DefaultLayout from '../layouts/DefaultLayout';
import SidebarLayout from '../layouts/SidebarLayout';
import Address from '../pages/Address';
import Cart from '../pages/Cart';
import CustomerList from '../pages/CustomerList';
import DrugOrderList from '../pages/DrugOrderList';
import DrugStoreList from '../pages/DrugStoreList';
import HistoryOrder from '../pages/HistoryOrder';
import Home from '../pages/Home';
import ListOrder from '../pages/ListOrder';
import ListPatients from '../pages/ListPatients';
import ListProducts from '../pages/ListProducts';
import Login from '../pages/Login';
import MyListOrder from '../pages/MyListOrder';
import Password from '../pages/Password';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ShipperList from '../pages/ShipperList';
import ShopDetals from '../pages/ShopDetals';
import ShopList from '../pages/ShopList';

const publicRoutes = [
    { path: '/', components: Home, layout: DefaultLayout },
    { path: '/login', components: Login, layout: DefaultLayout },
    { path: '/register', components: Register, layout: DefaultLayout },
    { path: '/user', components: Profile, layout: SidebarLayout },
    { path: '/password', components: Password, layout: SidebarLayout },
    { path: '/address', components: Address, layout: SidebarLayout },
    { path: '/cart', components: Cart, layout: CartLayout },
    { path: '/history-order', components: HistoryOrder, layout: DefaultLayout },
    { path: '/medical-shop/:medicalShopId', components: ShopDetals, layout: DefaultLayout },
    { path: '/list-order', components: ListOrder, layout: DefaultLayout },
    { path: '/my-list-order', components: MyListOrder, layout: DefaultLayout },
    { path: '/medical-shop/search/keyword=:searchValue', components: DrugStoreList, layout: DefaultLayout },
    { path: '/customer-list', components: CustomerList, layout: DefaultLayout },
    { path: '/shop-list', components: ShopList, layout: DefaultLayout },
    { path: '/shipper-list', components: ShipperList, layout: DefaultLayout },
    { path: '/list-patients', components: ListPatients, layout: DefaultLayout },
    { path: '/drug-order-list', components: DrugOrderList, layout: DefaultLayout },
    { path: '/my-shop', components: ListProducts, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
