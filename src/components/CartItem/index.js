import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './CartItem.module.scss';
import request from '../../api/axios';
import { useDispatch } from 'react-redux';
import { DecreaseQuantity, DeleteCart, IncreaseQuantity } from '../../actions/cartAction';

const cx = classNames.bind(styles);

function CartItem({ item }) {
    useEffect(() => {
        request.get(`medical-shop/${item.medicalShopId}`).then((res) => {
            setShop(res.data);
        });
    }, []);
    const [visible, setVisible] = useState(true);
    const [countOfProduct, setCountOfProduct] = useState(parseInt(item.quantity));
    const [shop, setShop] = useState({});
    const dispatch = useDispatch();
    const handleSub = (data) => {
        dispatch(DecreaseQuantity(data));
    };

    const handleAdd = (data) => {
        dispatch(IncreaseQuantity(data));
    };

    const handleClear = (data) => {
        dispatch(DeleteCart(data));
    };
    return (
        <>
            {visible ? (
                <div className={cx('rows-1')}>
                    <div className={cx('col-5', 'col')}>
                        <input type="checkbox" />
                    </div>
                    <div className={cx('col-1', 'col')}>
                        <img src={item.goodsUrlImage} className={cx('img')} />
                        <span>{item.goodsName}</span>
                    </div>
                    <div className={cx('col-6', 'col')}>
                        <div className={cx('nameshop')}>{shop.medicalShopName}</div>
                        <div className={cx('addressshop')}>{shop.detailAddress}</div>
                    </div>
                    <div className={cx('col-2', 'col')}>
                        <div className={cx('count-product')}>
                            <button onClick={() => handleSub(item)} className={cx('sub-btn')}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleAdd(item)} className={cx('add-btn')}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div className={cx('col-3', 'col')} style={{ color: '#ee4d2d' }}>
                        {item.quantity * item.price}đ
                    </div>
                    <div className={cx('col-4', 'col')}>
                        <button onClick={() => handleClear(item)}>Delete</button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default CartItem;
