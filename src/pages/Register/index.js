import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== rePassword) {
            alert('Wrong repassword, please try again');
        } else {
            alert(`username: ${username}, password: ${password}`);
        }
        axios
            .post('http://localhost:8083/api/v1/user/new', {
                userName: 'testacc123',
                password: '123123',
                email: 'testacc123@gmail.com',
                fullName: 'Dao Tan Hai sa',
                address: 'Xô Viết Nghệ Tĩnh, Hòa Cường Nam, Hải Châu, Đà Nẵng',
                identityNumber: '121123123154',
                phoneNumber: '03244632321',
                streetNumber: '10',
                postCode: '550000',
                rolesNames: ['User'],
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <h2>Register</h2>
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Enter username"
                            className={cx('input')}
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Enter password"
                            className={cx('input')}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input
                            placeholder="Enter repassword"
                            className={cx('input')}
                            type="password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={cx('register-btn')}>
                        REGISTER
                    </button>
                    <div>
                        Do you have an account?{' '}
                        <Link to="/login" style={{ color: 'blue' }}>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
