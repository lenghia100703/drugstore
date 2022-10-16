import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = (e) => {
        if (password !== rePassword) {
            alert('Wrong repassword, please try again');
        } else {
            alert(`username: ${username}, password: ${password}`);
        }
        e.preventDefault();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <h1>DRUG STORE</h1>
                </div>
                <form className={cx('content')} onSubmit={handleSubmit}>
                    <div className={cx('close-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx('title')}>
                        <h2>Đăng ký</h2>
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Tên người dùng"
                            className={cx('input')}
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Mật khẩu"
                            className={cx('input')}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Nhập lại mật khẩu"
                            className={cx('input')}
                            type="password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={cx('register-btn')}>
                        ĐĂNG KÝ
                    </button>
                    <div>
                        Bạn đã có tài khoản?{' '}
                        <Link to="/login" style={{ color: 'blue' }}>
                            Đăng nhập
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
