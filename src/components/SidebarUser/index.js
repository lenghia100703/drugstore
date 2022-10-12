import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from './SidebarUser.module.scss';

const cx = classNames.bind(styles);

const USER_INFO = {
    avt: 'https://avatars.githubusercontent.com/u/100254753?v=4',
    username: 'lenghia1007',
};

function SidebarUser() {
    return (
        <div className={cx('sidebar-user')}>
            <div className={cx('user-name')}>
                <Link to="/user">
                    <img className={cx('user-avt')} src={USER_INFO.avt} />
                </Link>
                <div className={cx('name-title')}>{USER_INFO.username}</div>
            </div>
            <NavLink to="/user" className={(nav) => cx('profile', { active: nav.isActive })}>
                <FontAwesomeIcon icon={faUser} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Tài khoản của tôi</div>
            </NavLink>
            <NavLink to="/password" className={(nav) => cx('change-password', { active: nav.isActive })}>
                <FontAwesomeIcon icon={faKey} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Đổi mật khẩu</div>
            </NavLink>
            <NavLink to="/address" className={(nav) => cx('my-address', { active: nav.isActive })}>
                <FontAwesomeIcon icon={faLocationDot} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Cập nhật địa chỉ</div>
            </NavLink>
            <NavLink to="/notifications" className={(nav) => cx('notifications', { active: nav.isActive })}>
                <FontAwesomeIcon icon={faBell} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Thông báo</div>
            </NavLink>
        </div>
    );
}

export default SidebarUser;
