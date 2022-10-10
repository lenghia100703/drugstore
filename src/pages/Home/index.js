import { faAngleRight, faArrowRightLong, faMagnifyingGlass, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ShopItem from '../../components/ShopItem';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const LIST_SHOP_NEAR_ME = [
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
    },
];

const LIST_SHOP_ORDER_LOT = [
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        kindshop: 'SHOP/CỬA HÀNG',
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        kindshop: 'SHOP/CỬA HÀNG',
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        kindshop: 'SHOP/CỬA HÀNG',
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        kindshop: 'SHOP/CỬA HÀNG',
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        kindshop: 'SHOP/CỬA HÀNG',
    },
];

function Home() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    useEffect(() => {
        const allWithClass = Array.from(document.getElementsByClassName('Home_selectbtn__zz5IK'));
        for (let i = 0; i < allWithClass.length; i++) {
            allWithClass[i].addEventListener('click', function () {
                var current = document.getElementsByClassName('Home_active__RyMPJ');
                current[0].className = current[0].className.replace(' Home_active__RyMPJ', '');
                this.className += ' Home_active__RyMPJ';
            });
        }
    }, []);
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
                                    <button
                                        className={cx('selectbtn', 'active')}
                                        onClick={() => {
                                            setShow1(true);
                                            setShow2(false);
                                            setShow3(false);
                                            setShow4(false);
                                        }}
                                    >
                                        Gần tôi
                                    </button>
                                    <button
                                        className={cx('selectbtn')}
                                        onClick={() => {
                                            setShow1(false);
                                            setShow2(true);
                                            setShow3(false);
                                            setShow4(false);
                                        }}
                                    >
                                        Đặt nhiều
                                    </button>
                                    <button
                                        className={cx('selectbtn')}
                                        onClick={() => {
                                            setShow1(false);
                                            setShow2(false);
                                            setShow3(true);
                                            setShow4(false);
                                        }}
                                    >
                                        Vừa đặt
                                    </button>
                                    <button
                                        className={cx('selectbtn')}
                                        onClick={() => {
                                            setShow1(false);
                                            setShow2(false);
                                            setShow3(false);
                                            setShow4(true);
                                        }}
                                    >
                                        Nổi bật
                                    </button>
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
                            {show1 && LIST_SHOP_NEAR_ME.map((item, index) => <ShopItem data={item} key={index} />)}
                            {show2 && LIST_SHOP_ORDER_LOT.map((item, index) => <ShopItem data={item} key={index} />)}
                            {show3 && LIST_SHOP_NEAR_ME.map((item, index) => <ShopItem data={item} key={index} />)}
                            {show4 && LIST_SHOP_NEAR_ME.map((item, index) => <ShopItem data={item} key={index} />)}
                            <div className={cx('more')}>
                                <button className={cx('more-btn')}>
                                    Xem thêm
                                    <span style={{ marginLeft: 4 }}>
                                        <FontAwesomeIcon icon={faRotateRight} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
