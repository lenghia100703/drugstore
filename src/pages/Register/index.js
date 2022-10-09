import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <h1>DRUG STORE</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('close-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx('title')}>
                        <h2>Đăng ký</h2>
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
                        <input placeholder="Tên người dùng" className={cx('input')} type="username" />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input placeholder="Mật khẩu" className={cx('input')} type="password" />
                    </div>
                    <div className={cx('input-form')}>
                        <FontAwesomeIcon icon={faLock} style={{ marginRight: 8 }} />
                        <input placeholder="Nhập lại mật khẩu" className={cx('input')} type="password" />
                    </div>
                    <button className={cx('register-btn')}>ĐĂNG KÝ</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
