import classNames from 'classnames/bind';

import styles from './Address.module.scss';

const cx = classNames.bind(styles);

function Address() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Cập nhật địa chỉ</h3>
            </div>
            <div className={cx('table-address')}>
                <div className={cx('table-address-header')}>
                    <div className={cx('rows')}>
                        <div className={cx('col-1')}>Tên gợi nhớ</div>
                        <div className={cx('col-2')}>Địa chỉ</div>
                        <div className={cx('col-3')}>Số điện thoại</div>
                        <div className={cx('col-4')}></div>
                    </div>
                </div>
                <div className={cx('table-address-body')}></div>
            </div>
        </div>
    );
}

export default Address;
