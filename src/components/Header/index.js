import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import NotiPopper from '../NotiPopper';
import UserPopper from '../UserPopper';
import { USER_INFO } from '../SidebarUser';

const cx = classNames.bind(styles);

function Header() {
    const USER = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <h2>DRUG STORE</h2>
                        </Link>
                    </div>
                </div>
                <div className={cx('right')}>
                    {USER ? (
                        <div className={cx('user')}>
                            <NotiPopper>
                                <div className={cx('icon-search')}>
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                            </NotiPopper>
                            <UserPopper>
                                <img src={USER_INFO.avt} className={cx('avt-user')} />
                            </UserPopper>
                        </div>
                    ) : (
                        <div className={cx('login')}>
                            <Link to="/login" className={cx('login-btn')}>
                                Log In
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
