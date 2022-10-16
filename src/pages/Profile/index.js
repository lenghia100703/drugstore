import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const [username, setUsername] = useState('');
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        alert(`username: ${username}, fullname: ${fullname}, email: ${email}`);
        e.preventDefault();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Hồ Sơ Của Tôi</h3>
            </div>
            <form className={cx('user-info')} onSubmit={handleSubmit}>
                <div className={cx('user-name')}>
                    <div className={cx('title')}>Tên đăng nhập</div>
                    <input
                        className={cx('input-username')}
                        value={username == '' ? 'lenghia1007' : username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className={cx('full-name')}>
                    <div className={cx('title')}>Tên đầy đủ</div>
                    <input
                        value={fullname == '' ? 'Lê Nghĩa' : fullname}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                        className={cx('input-fullname')}
                        spellCheck={false}
                    />
                </div>
                <div className={cx('email')}>
                    <div className={cx('title')}>Email</div>
                    <input
                        value={email == '' ? 'abc123@gmail.com' : email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className={cx('input-email')}
                        spellCheck={false}
                    />
                </div>
                <div className={cx('birthday')}>
                    <div className={cx('title')}>Ngày sinh</div>
                    <select id="day" name="day" className={cx('select-birthday')}>
                        <option>1</option>
                    </select>
                    <select id="month" name="month" className={cx('select-birthday')}>
                        <option>January</option>
                    </select>
                    <select id="year" name="year" className={cx('select-birthday')}>
                        <option>2000</option>
                    </select>
                </div>
                <div className={cx('save')}>
                    <button className={cx('save-btn')}>Lưu</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
