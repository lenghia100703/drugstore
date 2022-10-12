import classNames from 'classnames/bind';

import styles from './Password.module.scss';

const cx = classNames.bind(styles);

function Password() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Thay Đổi Mật Khẩu</h3>
            </div>
            <div className={cx('user-info')}>
                <div className={cx('new-password')}>
                    <div className={cx('title')}>Mật Khẩu Mới</div>
                    <input className={cx('input-name')} type="password" />
                </div>
                <div className={cx('check-password')}>
                    <div className={cx('title')}>Xác Nhận Mật Khẩu</div>
                    <input className={cx('input-name')} type="password" />
                </div>
                <div className={cx('save')}>
                    <button className={cx('save-btn')}>Xác Nhận</button>
                </div>
            </div>
        </div>
    );
}

export default Password;
