import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

export const userLogin = '';
export const passLogin = '';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        if (username == '' || password == '') {
            alert('Please enter a username and password');
        }
        axios
            .post('http://localhost:8083/api/v1/user/login', {
                username: username,
                password: password,
            })
            .then((result) => {
                console.log(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <h2>Đăng nhập</h2>
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Tên người dùng"
                            className={cx('input')}
                            type="username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                userLogin = username;
                            }}
                        />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Mật khẩu"
                            className={cx('input')}
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                passLogin = password;
                            }}
                        />
                    </div>
                    <button type="submit" className={cx('login-btn')}>
                        ĐĂNG NHẬP
                    </button>
                    <Link to="/register" style={{ color: 'white' }}>
                        <button className={cx('register-btn')}>TẠO TÀI KHOẢN MỚI</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
