import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SidebarUser.module.scss';

const cx = classNames.bind(styles);

function SidebarUser({ data }) {
    return (
        <>
            <div className={cx('user-name')}>
                <img className={cx('user-avt')} src={data.avt} />
                <div className={cx('name-title')}>{data.username}</div>
            </div>
            <Link to="/profile" className={cx('profile')}>
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
        </>
    );
}

export default SidebarUser;
