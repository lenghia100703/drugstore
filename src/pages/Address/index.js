import classNames from 'classnames/bind';

import styles from './Address.module.scss';

const cx = classNames.bind(styles);

function Address() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Update Address</h3>
            </div>
            <div className={cx('table-address')}>
                <div className={cx('table-address-header')}>
                    <div className={cx('rows')}>
                        <div className={cx('col-1')}>Name reminiscent</div>
                        <div className={cx('col-2')}>Address</div>
                        <div className={cx('col-3')}>Phone</div>
                        <div className={cx('col-4')}></div>
                    </div>
                </div>
                <div className={cx('table-address-body')}></div>
            </div>
        </div>
    );
}

export default Address;
