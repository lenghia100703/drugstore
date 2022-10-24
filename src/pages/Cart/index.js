import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Cart.module.scss';
import CartItem from '../../components/CartItem';

const cx = classNames.bind(styles);

export const LIST_ORDER = [
    {
        id: 0,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 1,
        price: 17000,
    },
    {
        id: 1,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 2,
        price: 17000,
    },
    {
        id: 2,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 3,
        price: 17000,
    },
    {
        id: 3,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 4,
        price: 17000,
    },
    {
        id: 4,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 4,
        price: 17000,
    },
    {
        id: 5,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 4,
        price: 17000,
    },
    {
        id: 6,
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 4,
        price: 17000,
    },
];

function Cart() {
    const [countOfProduct, setCountOfProduct] = useState(() => {
        let count;
        for (let i = 0; i < LIST_ORDER.length; i++) {
            count = LIST_ORDER[i].countOfProduct;
        }
        return count;
    });

    const [list, setList] = useState(LIST_ORDER ?? []);

    const [totalProduct, setTotalProduct] = useState(() => {
        let sum = 0;
        for (let i = 0; i < LIST_ORDER.length; i++) {
            sum += LIST_ORDER[i].countOfProduct;
        }
        return sum;
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
                        <div className={cx('col-2', 'col')}>Quantity</div>
                        <div className={cx('col-3', 'col')}>Total Price</div>
                        <div className={cx('col-4', 'col')}>Actions</div>
                    </div>
                </div>
                <div className={cx('table-product-body')}>
                    {list.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
                <div className={cx('pay')}>
                    <span style={{ marginLeft: 22 }}>
                        Total (<span>{totalProduct}</span> item)
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
