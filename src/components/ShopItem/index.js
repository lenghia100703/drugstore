import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function ShopItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('img')}></div>
                <div className={cx('title')}>
                    <div className={cx('name-shop')}></div>
                    <div className={cx('count-shop-place')}></div>
                    <div className={cx('shop-info')}></div>
                    <span className={cx('kind-shop')}></span>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;
