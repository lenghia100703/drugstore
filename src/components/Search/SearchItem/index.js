import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={data.to} className={cx('inner')}>
                <div className={cx('inner-left')}>
                    <div className={cx('img')}>
                        <img src={data.img} className={cx('shop-img')} />
                    </div>
                    <div className={cx('title')}>
                        <div className={cx('name-shop')}>{data.nameshop}</div>
                        <div className={cx('address-shop')}>{data.address}</div>
                    </div>
                </div>
                <div className={cx('inner-right')}>
                    {data.isOpen ? (
                        <span className={cx('open')}>
                            <span>Mở cửa</span>
                            <span>
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: 8, marginLeft: 4 }} />
                            </span>
                        </span>
                    ) : (
                        <span className={cx('close')}>
                            <span>Đã đóng</span>
                            <span>
                                <FontAwesomeIcon icon={faCircle} style={{ fontSize: 8, marginLeft: 4 }} />
                            </span>
                        </span>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default SearchItem;
