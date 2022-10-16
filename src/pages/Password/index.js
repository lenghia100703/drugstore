import classNames from 'classnames/bind';
import { useState } from 'react';
import { passLogin, password, userLogin } from '../Login';

import styles from './Password.module.scss';

const cx = classNames.bind(styles);

function Password() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    const handleSubmit = (e) => {
        if (oldPassword == '' || newPassword == '' || reNewPassword == '') {
            alert('Please enter ');
        } else if (oldPassword !== passLogin) {
            alert('Wrong old password');
        } else if (newPassword !== reNewPassword) {
            alert('Wrong repassword, please try again');
        }
        e.preventDefault();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Thay Đổi Mật Khẩu</h3>
            </div>
            <form className={cx('user-info')} onSubmit={handleSubmit}>
                <div className={cx('old-password')}>
                    <div className={cx('title')}>Mật Khẩu Hiện Tại</div>
                    <input
                        className={cx('input-name')}
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div className={cx('new-password')}>
                    <div className={cx('title')}>Mật Khẩu Mới</div>
                    <input
                        className={cx('input-name')}
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className={cx('check-password')}>
                    <div className={cx('title')}>Xác Nhận Mật Khẩu</div>
                    <input
                        className={cx('input-name')}
                        type="password"
                        value={reNewPassword}
                        onChange={(e) => setReNewPassword(e.target.value)}
                    />
                </div>
                <div className={cx('save')}>
                    <button className={cx('save-btn')} type="submit">
                        Xác Nhận
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Password;
