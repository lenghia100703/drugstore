import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Hồ Sơ Của Tôi</h3>
            </div>
            <div className={cx('user-info')}>
                <div className={cx('user-name')}>
                    <div className={cx('title')}>Tên đăng nhập</div>
                    <input value="lenghia1007" className={cx('input-username')} />
                </div>
                <div className={cx('full-name')}>
                    <div className={cx('title')}>Tên đầy đủ</div>
                    <input value="Lê Nghĩa" className={cx('input-fullname')} spellCheck={false} />
                </div>
                <div className={cx('email')}>
                    <div className={cx('title')}>Email</div>
                    <input value="adminabc123@gmail.com" className={cx('input-email')} spellCheck={false} />
                </div>
                <div className={cx('gender')}>
                    <div className={cx('title')}>Giới tính</div>
                    <input type="radio" id="men" name="gender" style={{ marginRight: 8 }} />
                    <label for="men" style={{ marginRight: 8 }}>
                        Nam
                    </label>
                    <input type="radio" id="women" name="gender" style={{ marginRight: 8 }} />
                    <label for="women" style={{ marginRight: 8 }}>
                        Nữ
                    </label>
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
            </div>
        </div>
    );
}

export default Profile;
