import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

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
            <Link to="/user" className={cx('profile')}>
                <FontAwesomeIcon icon={faUser} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Tài khoản của tôi</div>
            </Link>
            <Link to="/password" className={cx('change-password')}>
                <FontAwesomeIcon icon={faKey} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Đổi mật khẩu</div>
            </Link>
            <Link to="/notifications" className={cx('notifications')}>
                <FontAwesomeIcon icon={faBell} />
                <div style={{ fontSize: 16, marginLeft: 8 }}>Thông báo</div>
            </Link>
        </div>
    );
}

export default SidebarUser;
