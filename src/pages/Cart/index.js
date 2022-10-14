import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

const LIST_ORDER = [
    {
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 2,
        price: 17000,
    },
    {
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 2,
        price: 17000,
    },
    {
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 2,
        price: 17000,
    },
    {
        img: 'https://cf.shopee.vn/file/c3005a166c0594e0618140a1e9d7fbc1_tn',
        nameproduct: 'Thuốc trị chóng mặt Taginyl 500mg',
        countOfProduct: 2,
        price: 17000,
    },
];

const list1 = LIST_ORDER[0];

function Cart() {
    const [countOfProduct, setCountOfProduct] = useState(list1.countOfProduct);

    const handleSub = () => {
        setCountOfProduct((list1.countOfProduct -= 1));
    };

    const handleAdd = () => {
        setCountOfProduct((list1.countOfProduct += 1));
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Giỏ hàng</h1>
            <div className={cx('body')}>
                <div className={cx('table-product-header')}>
                    <div className={cx('rows-1')}>
                        <div className={cx('col-1', 'col')}>Sản phẩm</div>
                        <div className={cx('col-2', 'col')}>Số lượng</div>
                        <div className={cx('col-3', 'col')}>Số tiền</div>
                        <div className={cx('col-4', 'col')}>Thao tác</div>
                    </div>
                </div>
                <div className={cx('table-product-body')}>
                    {LIST_ORDER.map((item, index) => (
                        <div className={cx('rows-1')} key={index}>
                            <div className={cx('col-1', 'col')}>
                                <img src={item.img} className={cx('img')} />
                                <span>{item.nameproduct}</span>
                            </div>
                            <div className={cx('col-2', 'col')}>
                                <div className={cx('count-product')}>
                                    <button onClick={handleSub} className={cx('sub-btn')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span>{item.countOfProduct}</span>
                                    <button onClick={handleAdd} className={cx('add-btn')}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <div className={cx('col-3', 'col')}>{item.countOfProduct * item.price}đ</div>
                            <div className={cx('col-4', 'col')}>
                                <button>Xóa</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;
