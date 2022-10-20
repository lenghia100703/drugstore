import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { click } from '@testing-library/user-event/dist/click';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './UserPopper.module.scss';

const cx = classNames.bind(styles);

const USER_POPPER = [
    {
        to: '/user',
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
    },
    {
        to: '/cart',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Giỏ hàng',
    },
    {
        to: '/history-order',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Lịch sử đã mua',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        separate: true,
    },
];

const SHIPPER_POPPER = [
    {
        to: '/user',
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
    },
    {
        to: '/list-order',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Danh sách đặt hàng',
    },
    {
        to: '/my-list-order',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        title: 'Danh sách đặt hàng của tôi',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
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
