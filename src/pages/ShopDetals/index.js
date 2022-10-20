import { faCircle, faCoins, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import ProductItem from '../../components/ProductItem';
import { LIST_SHOP_NEAR_ME } from '../Home';

import styles from './ShopDetals.module.scss';

const cx = classNames.bind(styles);

const data = LIST_SHOP_NEAR_ME[0];

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
    useEffect(() => {
        const allWithClass = Array.from(document.getElementsByClassName('ShopDetals_star__LL5qg'));

        switch (data.countstar) {
            case 1:
                allWithClass[0].className += ' ShopDetals_checked__OLEci';
                break;
            case 2:
                allWithClass[0].className += ' ShopDetals_checked__OLEci';
                allWithClass[1].className += ' ShopDetals_checked__OLEci';
                break;
            case 3:
                allWithClass[2].className += ' ShopDetals_checked__OLEci';
                allWithClass[0].className += ' ShopDetals_checked__OLEci';
                allWithClass[1].className += ' ShopDetals_checked__OLEci';
                break;
            case 4:
                allWithClass[3].className += ' ShopDetals_checked__OLEci';
                allWithClass[2].className += ' ShopDetals_checked__OLEci';
                allWithClass[0].className += ' ShopDetals_checked__OLEci';
                allWithClass[1].className += ' ShopDetals_checked__OLEci';
                break;
            case 5:
                allWithClass[4].className += ' ShopDetals_checked__OLEci';
                allWithClass[3].className += ' ShopDetals_checked__OLEci';
                allWithClass[2].className += ' ShopDetals_checked__OLEci';
                allWithClass[0].className += ' ShopDetals_checked__OLEci';
                allWithClass[1].className += ' ShopDetals_checked__OLEci';
                break;
        }
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('detal-shop')}>
                <div className={cx('inner-detal-shop')}>
                    <div className={cx('inner-left')}>
                        <img src={data.img} className={cx('shop-img')} />
                    </div>
                    <div className={cx('inner-right')}>
                        <div className={cx('kind-shop')}>{data.kindshop}</div>
                        <div className={cx('name-shop')}>{data.nameshop}</div>
                        <div className={cx('address-shop')}>{data.address}</div>
                        <div className={cx('ratting')}>
                            <span className={cx('star')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className={cx('star')}>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        {data.isOpen ? (
                            <div className={cx('open')}>
                                <span>
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: 9, marginRight: 4 }} />
                                </span>
                                <span>Mở cửa</span>
                            </div>
                        ) : (
                            <div className={cx('close')}>
                                <span>
                                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: 9, marginRight: 4 }} />
                                </span>
                                <span>Đã đóng</span>
                            </div>
                        )}
                        <div className={cx('price')}>
                            <span>
                                <FontAwesomeIcon icon={faCoins} style={{ fontSize: 14, marginRight: 4 }} />
                            </span>
                            <span>
                                {data.minprice} - {data.maxprice}
                            </span>
                        </div>
                        <div className={cx('utility-shop')}>
                            <div style={{ color: '#959595' }}>DỊCH VỤ BỞI</div>
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
                        <div className={cx('namegroup')}>THUỐC RỐI LOẠN TIỀN ĐÌNH</div>
                        {LIST_PRODUCT.map((item, index) => (
                            <div>
                                <ProductItem data={item} key={index} onClick={handleOpen} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetals;
