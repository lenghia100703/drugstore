import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import styles from './ShopDetals.module.scss';
import ProductItem from '../../components/ProductItem';
import request from '../../api/axios';

const cx = classNames.bind(styles);

export const LIST_PRODUCT = [
    {
        img: 'https://images.foody.vn/res/g95/947252/s120x120/76ffc88d-251e-4e57-b631-38b8494853a1.jpg',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countorder: 10,
        price: 17000,
        namegroup: 'thuocroiloantiendinh',
        nametitle: 'THUỐC RỐI LOẠN TIỀN ĐÌNH',
        detalsproduct: 'Giảm chóng mặt ngay tức thì ...',
    },
    {
        img: 'https://images.foody.vn/res/g11/102018/s120x120/2018813151644-bio-accimingold.jpg',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countorder: 10,
        price: 17000,
        namegroup: 'thuocroiloantiendinh',
        nametitle: 'THUỐC RỐI LOẠN TIỀN ĐÌNH',
        detalsproduct: 'Hết đau bụng tức thì ...',
    },
    {
        img: 'https://images.foody.vn/res/g95/947252/s120x120/76ffc88d-251e-4e57-b631-38b8494853a1.jpg',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countorder: 10,
        price: 17000,
        namegroup: 'thuocroiloantiendinh',
        nametitle: 'THUỐC RỐI LOẠN TIỀN ĐÌNH',
    },
    {
        img: 'https://images.foody.vn/res/g95/947252/s120x120/76ffc88d-251e-4e57-b631-38b8494853a1.jpg',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countorder: 10,
        price: 17000,
        namegroup: 'thuocroiloantiendinh',
        nametitle: 'THUỐC RỐI LOẠN TIỀN ĐÌNH',
    },
    {
        img: 'https://images.foody.vn/res/g11/102018/s120x120/2018813151644-bio-accimingold.jpg',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        countorder: 10,
        price: 17000,
        namegroup: 'thuocroiloantiendinh',
        nametitle: 'THUỐC RỐI LOẠN TIỀN ĐÌNH',
    },
];

function ShopDetals() {
    const [shopById, setShopById] = useState({});
    const [ratting, setRatting] = useState({});
    const [good, setGood] = useState([]);

    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);

    const nameUrl = window.location.href;
    const shopId = nameUrl.replace('http://localhost:2806/medical-shop/', '');

    let ratingAvg = 0;

    useEffect(() => {
        request.get(`medical-shop/${shopId}`).then((res) => {
            setShopById(res.data);
        });
        request.get(`rating/list/medicalshop/${shopId}`).then((res) => {
            setRatting(res.data);
        });
        request.get(`medical-shop/goods/goods1`).then((res) => {
            if (shopId === res.data.medicalShopId) {
                good.push(res.data);
            }
        });
        request.get(`medical-shop/goods/goods2`).then((res) => {
            if (shopId === res.data.medicalShopId) {
                good.push(res.data);
            }
        });
    }, [shopId, good]);

    useEffect(() => {
        for (let key in ratting) {
            ratingAvg += ratting[key].numberOfStartOnMedicalShop / ratting.length;
            Math.floor(ratingAvg);
        }
        switch (ratingAvg) {
            case 1:
                setStar1(true);
                break;
            case 2:
                setStar1(true);
                setStar2(true);
                break;
            case 3:
                setStar1(true);
                setStar2(true);
                setStar3(true);
                break;
            case 4:
                setStar1(true);
                setStar2(true);
                setStar3(true);
                setStar4(true);
                break;
            case 5:
                setStar1(true);
                setStar2(true);
                setStar3(true);
                setStar4(true);
                setStar5(true);
                break;
        }
    }, [ratingAvg]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('detal-shop')}>
                <div className={cx('inner-detal-shop')}>
                    <div className={cx('inner-left')}>
                        <img src={shopById.medicalShopUrlImage} className={cx('shop-img')} />
                    </div>
                    <div className={cx('inner-right')}>
                        <div className={cx('kind-shop')}>{shopById.kindshop}</div>
                        <div className={cx('name-shop')}>{shopById.medicalShopName}</div>
                        <div className={cx('address-shop')}>{shopById.detailAddress}</div>
                        <div className={cx('ratting')}>
                            <span className={cx('star', star1 && 'checked')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star', star2 && 'checked')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star', star3 && 'checked')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star', star4 && 'checked')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star', star5 && 'checked')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className={cx('utility-shop')}>
                            <div style={{ color: '#959595' }}>SERVICE BY</div>
                            <div>DrugStore</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('menu-shop-detal')}>
                <div className={cx('inner-menu-shop')}>
                    <div className={cx('search')}>
                        <span className={cx('search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <input className={cx('input-search')} placeholder="Tìm món" />
                    </div>
                    <div>
                        {good.map((item, index) => (
                            <div>
                                <ProductItem data={item} key={index} onClick={() => true} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetals;
