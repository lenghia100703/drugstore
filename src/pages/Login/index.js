import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <h1>DRUG STORE</h1>
                </div>
                <form className={cx('content')}>
                    <div className={cx('close-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx('title')}>
                        <h2>Đăng nhập</h2>
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
                        <input placeholder="Tên người dùng" className={cx('input')} type="username" />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input placeholder="Mật khẩu" className={cx('input')} type="password" />
                    </div>
                    <button type="submit" className={cx('login-btn')}>ĐĂNG NHẬP</button>
                    <Link to="/register" style={{ color: 'white' }}>
                        <button className={cx('register-btn')}>
                            TẠO TÀI KHOẢN MỚI
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
