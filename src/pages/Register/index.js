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
        var myHeaders = new Headers();
        myHeaders.append(
            'Authorization',
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBZG1pbiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwMDAvYXBpL3YxL3VzZXIvbG9naW4iLCJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjk1MzE0Nzk2LCJ1c2VySWQiOiJ1c2VyXzEifQ.BQgD3tve1zC0Rov3_JkzVLVPUrtf32esnts_EXx5c2E',
        );

        var formdata = new FormData();
        formdata.append(
            'userDTO',
            '{\n    "userName": "testacc123",\n    "password": "123123213",\n    "email": "testacc324@gmail.com",\n    "fullName": "Dao Tan Hai",\n    "address": "Xô Viết Nghệ Tĩnh, Hòa Cường Nam, Hải Châu, Đà Nẵng",\n    "identityNumber": "121123123123",\n    "phoneNumber": "0324463258",\n    "streetNumber": "10",\n    "postCode": "550000",\n    "rolesNames": ["User"]\n}',
        );

        var requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            body: formdata,
            redirect: 'follow',
        };

        fetch('http://localhost:8083/api/v1/user/new', requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
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
