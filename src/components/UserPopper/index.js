import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './UserPopper.module.scss';

const cx = classNames.bind(styles);

const USER_POPPER = [
    {
        to: '/user',
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
    },
    {
        to: '/cart',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'View Cart',
    },
    {
        to: '/history-order',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Order History',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log Out',
        separate: true,
    },
];

const SHIPPER_POPPER = [
    {
        to: '/user',
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
    },
    {
        to: '/list-order',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Delivery List',
    },
    {
        to: '/my-list-order',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'My Delivery List',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log Out',
        separate: true,
    },
];

function UserPopper({ children }) {
    const renderItems = () => {
        return SHIPPER_POPPER.map((item, index) => {
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

export default UserPopper;
