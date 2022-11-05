import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Cart.module.scss';
import CartItem from '../../components/CartItem';
import request from '../../api/axios';
import { products } from '../../components/ProductItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

// export const LIST_ORDER = [

function Cart() {
    const cart = useSelector((state) => state.cart);
    const { numberCart, Carts } = cart;
    const [countOfProduct, setCountOfProduct] = useState(() => {
        // let count;
        // for (let i = 0; i < LIST_ORDER.length; i++) {
        //     count = LIST_ORDER[i].countOfProduct;
        // }
        // return count;
    });
    const [list, setList] = useState([]);

    const [totalProduct, setTotalProduct] = useState(() => {
        // let sum = 0;
        // for (let i = 0; i < LIST_ORDER.length; i++) {
        //     sum += LIST_ORDER[i].countOfProduct;
        // }
        // return sum;
    });

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Shopping Cart</h1>
            <div className={cx('body')}>
                <div className={cx('table-product-header')}>
                    <div className={cx('rows-1')}>
                        <div className={cx('col-5', 'col')}>
                            <input type="checkbox" />
                        </div>
                        <div className={cx('col-1', 'col')}>Product</div>
                        <div className={cx('col-6', 'col')}>Shop</div>
                        <div className={cx('col-2', 'col')}>Quantity</div>
                        <div className={cx('col-3', 'col')}>Total Price</div>
                        <div className={cx('col-4', 'col')}>Actions</div>
                    </div>
                </div>
                <div className={cx('table-product-body')}>
                    {Carts.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
                <div className={cx('pay')}>
                    <span style={{ marginLeft: 22 }}>
                        Total (<span>{numberCart}</span> products)
                    </span>
                    <span>
                        <button className={cx('pay-btn')}>Check out</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Cart;
