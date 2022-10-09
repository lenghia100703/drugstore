import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import UserPopper from '../UserPopper';

import styles from './Header.module.scss';

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
                    <div className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    {USER ? (
                        <div className={cx('user')}>
                            <UserPopper>
                                <img
                                    src="https://avatars.githubusercontent.com/u/100254753?v=4"
                                    className={cx('avt-user')}
                                />
                            </UserPopper>
                        </div>
                    ) : (
                        <div className={cx('login')}>
                            <Link to="/login" className={cx('login-btn')}>
                                Đăng nhập
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;