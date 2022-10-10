import { faAngleRight, faArrowRightLong, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content-left')}>
                    <div>
                        <h1 className={cx('title')}>Đặt Thuốc, giao hàng từ 20'...</h1>
                        <div className={cx('local')}>Có 52 Địa Điểm Ở TP. HCM Từ 00:00 - 23:59</div>
                    </div>
                    <div className={cx('search')}>
                        <input placeholder="Tìm nhà thuốc, cửa hàng hóa mỹ phẩm..." className={cx('input-search')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                        </button>
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('main-right')}>
                        <div className={cx('user-get-local')}>
                            <div className={cx('inner-get-local')}>
                                <div className={cx('get-local-left')}>
                                    <span style={{ color: '#0288d1', fontWeight: 600, marginRight: 8 }}>Thuốc</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: 12 }} />
                                    <span style={{ marginLeft: 8 }}>Chọn địa chỉ giao hàng</span>
                                </div>
                                <div className={cx('get-local-right')}>
                                    <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 14 }} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('shop-list')}>
                            <div className={cx('genre-select')}>
                                <div>
                                    <button className={cx('selectbtn', 'active')}>Gần tôi</button>
                                    <button className={cx('selectbtn')}>Đặt nhiều</button>
                                    <button className={cx('selectbtn')}>Vừa đặt</button>
                                    <button className={cx('selectbtn')}>Nổi bật</button>
                                </div>
                                <select className={cx('select-local')}>
                                    <option>Chọn quận/ huyện</option>
                                    <option>Quận 1</option>
                                    <option>Quận 2</option>
                                    <option>Quận 3</option>
                                    <option>Quận 4</option>
                                    <option>Quận 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
