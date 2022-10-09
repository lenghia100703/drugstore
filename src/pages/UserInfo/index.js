import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import SidebarUser from './SidebarUser';

import styles from './UserInfo.module.scss';

const cx = classNames.bind(styles);

const USER_INFO = {
    avt: 'https://avatars.githubusercontent.com/u/100254753?v=4',
    username: 'lenghia1007',
};

function UserInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content-left')}>
                    <SidebarUser data={USER_INFO} />
                </div>
                <div className={cx('content-right')}></div>
            </div>
        </div>
    );
}

export default UserInfo;
