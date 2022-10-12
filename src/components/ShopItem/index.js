import { faCoins, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ShopItem.module.scss';

const cx = classNames.bind(styles);

function ShopItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('inner')} to={data.to}>
                <div className={cx('img')}>
                    <img src={data.img} className={cx('shop-img')} />
                </div>
                <div className={cx('title')}>
                    <div className={cx('name-shop')}>{data.nameshop}</div>
                    <div className={cx('count-shop-place')}>
                        <span>{data.countshopplace} địa điểm</span>
                    </div>
                    <div className={cx('shop-info')}>
                        <FontAwesomeIcon icon={faTag} style={{ fontSize: 18, marginRight: 10 }} />
                        <span style={{ marginRight: 10 }}>Tối thiểu {data.lowestprice}k</span>
                        <FontAwesomeIcon icon={faCoins} style={{ fontSize: 18, marginRight: 10 }} />
                        <span>Giá {data.price}k</span>
                    </div>
                    <span className={cx('kind-shop')}>{data.kindshop}</span>
                </div>
            </Link>
        </div>
    );
}

export default ShopItem;
