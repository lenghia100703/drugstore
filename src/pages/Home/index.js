import { faAngleRight, faArrowRightLong, faMagnifyingGlass, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Search from '../../components/Search';
import ShopItem from '../../components/ShopItem';

import styles from './Home.module.scss';
import request from '../../api/axios';

const cx = classNames.bind(styles);

export const LIST_SHOP_NEAR_ME = [
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
    },
    {
        img: 'https://images.foody.vn/res/g12/111370/prof/s280x175/foody-upload-api-foody-mobile-1-jpg-180522135547.jpg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countshopplace: 8,
        lowestprice: 0,
        price: 150,
        kindshop: 'SHOP/CỬA HÀNG, NHÀ THUỐC',
        to: '/nha-thuoc-ecopharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        minprice: 20000,
        maxprice: 500000,
        countstar: 4,
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
        to: '/nha-thuoc-an-khang',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        to: '/nha-thuoc-an-khang',
        kindshop: 'SHOP/CỬA HÀNG',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        to: '/nha-thuoc-an-khang',
        kindshop: 'SHOP/CỬA HÀNG',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        to: '/nha-thuoc-an-khang',
        kindshop: 'SHOP/CỬA HÀNG',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
    },
    {
        img: 'https://images.foody.vn/res/g77/765395/prof/s280x175/foody-upload-api-foody-mobile-untitled-8-jpg-180731173054.jpg',
        nameshop: 'Nhà Thuốc An Khang',
        countshopplace: 14,
        lowestprice: 0,
        price: 59,
        to: '/nha-thuoc-an-khang',
        kindshop: 'SHOP/CỬA HÀNG',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
    },
];

const LIST_SHOP_JUST_ORDER = [
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Nhà Thuốc Thái Minh - Minh Hiếu',
        countshopplace: 3,
        lowestprice: 20,
        price: 56,
        kindshop: 'SHOP/CỬA HÀNG',
        to: '/nha-thuoc-thai-minh',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Nhà Thuốc Thái Minh - Minh Hiếu',
        countshopplace: 3,
        lowestprice: 20,
        price: 56,
        kindshop: 'SHOP/CỬA HÀNG',
        to: '/nha-thuoc-thai-minh',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Nhà Thuốc Thái Minh - Minh Hiếu',
        countshopplace: 3,
        lowestprice: 20,
        price: 56,
        to: '/nha-thuoc-thai-minh',
        kindshop: 'SHOP/CỬA HÀNG',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Nhà Thuốc Thái Minh - Minh Hiếu',
        countshopplace: 3,
        lowestprice: 20,
        price: 56,
        kindshop: 'SHOP/CỬA HÀNG',
        to: '/nha-thuoc-thai-minh',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Nhà Thuốc Thái Minh - Minh Hiếu',
        countshopplace: 3,
        lowestprice: 20,
        price: 56,
        to: '/nha-thuoc-thai-minh',
        kindshop: 'SHOP/CỬA HÀNG',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
];

const LIST_SHOP_FEATURED = [
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Hàng Pháp Nhập Khẩu Urgo - Thiết Bị Y Tế',
        countshopplace: 1,
        lowestprice: 20,
        price: 127,
        kindshop: 'NHÀ THUỐC',
        to: '/hang-phap-nhap-khau-urgo',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Hàng Pháp Nhập Khẩu Urgo - Thiết Bị Y Tế',
        countshopplace: 1,
        lowestprice: 20,
        price: 127,
        kindshop: 'NHÀ THUỐC',
        to: '/hang-phap-nhap-khau-urgo',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Hàng Pháp Nhập Khẩu Urgo - Thiết Bị Y Tế',
        countshopplace: 1,
        lowestprice: 20,
        price: 127,
        kindshop: 'NHÀ THUỐC',
        to: '/hang-phap-nhap-khau-urgo',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Hàng Pháp Nhập Khẩu Urgo - Thiết Bị Y Tế',
        countshopplace: 1,
        lowestprice: 20,
        price: 127,
        kindshop: 'NHÀ THUỐC',
        to: '/hang-phap-nhap-khau-urgo',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
    {
        img: 'https://images.foody.vn/res/g100004/1000037772/prof/s280x175/file_9d910b54-3f67-4a5c-bc74-d63-657e084f-211118083446.jpeg',
        nameshop: 'Hàng Pháp Nhập Khẩu Urgo - Thiết Bị Y Tế',
        countshopplace: 1,
        lowestprice: 20,
        price: 127,
        kindshop: 'NHÀ THUỐC',
        to: '/hang-phap-nhap-khau-urgo',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: false,
    },
];

function Home() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const [shopNearMe, setShopNearMe] = useState([]);

    const [visible, setVisible] = useState(5);

    const handleMore = () => {
        setVisible((prev) => prev + 5);
    };

    useEffect(() => {
        request.get('medical-shop/list').then((res) => {
            setShopNearMe(res.data);
        });
    }, [shopNearMe]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content-left')}>
                    <div>
                        <h1 className={cx('title')}>Đặt Thuốc, giao hàng từ 20'...</h1>
                        <div className={cx('local')}>Có 52 Địa Điểm Ở TP. HCM Từ 00:00 - 23:59</div>
                    </div>
                    <Search />
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
                                        className={cx('selectbtn', show1 && 'active')}
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
                                        className={cx('selectbtn', show2 && 'active')}
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
                                        className={cx('selectbtn', show3 && 'active')}
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
                                        className={cx('selectbtn', show4 && 'active')}
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
                            {show1 &&
                                shopNearMe.slice(0, visible).map((item, index) => <ShopItem data={item} key={index} />)}
                            {show2 &&
                                shopNearMe.slice(0, visible).map((item, index) => <ShopItem data={item} key={index} />)}
                            {show3 &&
                                shopNearMe.slice(0, visible).map((item, index) => <ShopItem data={item} key={index} />)}
                            {show4 &&
                                shopNearMe.slice(0, visible).map((item, index) => <ShopItem data={item} key={index} />)}
                            <div className={cx('more')}>
                                <button className={cx('more-btn')} onClick={handleMore}>
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
