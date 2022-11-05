import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './ManagerPopper.module.scss';

const cx = classNames.bind(styles);

const ADMIN_POPPER = [
    {
        to: '/customer-list',
        title: 'Manage customer list',
    },
    {
        to: '/shop-list',
        title: 'Manage shop list',
    },
    {
        to: '/shipper-list',
        title: 'Manage shipper list',
    },
];

const SHOP_POPPER = [
    {
        to: '/list-patients',
        title: 'List Of Patients',
    },
    {
        to: '/drug-order-list',
        title: 'Drug Order List',
    },
    {
        to: '/my-shop',
        title: 'List Products',
    },
];

function ManagerPopper({ children }) {
    let POPPER = [];
    const renderItems = () => {
        // if (userInfo.roles === 'Admin') {
        //     POPPER = ADMIN_POPPER;
        // } else if (userInfo.roles === 'Shop') {
        //     POPPER = SHOP_POPPER;
        // }
        return ADMIN_POPPER.map((item, index) => {
            return (
                <div
                    className={cx('menu-item', {
                        separate: item.separate,
                    })}
                >
                    <Link to={item.to} key={index} className={cx('btn-item')}>
                        <span className={cx('icon-item')}>{item.icon}</span>
                        <span>{item.title}</span>
                    </Link>
                </div>
            );
        });
    };
    return (
        <HeadlessTippy
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <div className={cx('menu-popper')}>
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </div>
                </div>
            )}
            trigger="click"
        >
            {children}
        </HeadlessTippy>
    );
}

export default ManagerPopper;
