import classNames from 'classnames/bind';

import styles from './Address.module.scss';

const cx = classNames.bind(styles);

function Address() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Cập nhật địa chỉ</h3>
            </div>
        </div>
    );
}

export default Address;
