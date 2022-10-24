import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './CartItem.module.scss';
import { LIST_ORDER } from '../../pages/Cart';

const cx = classNames.bind(styles);

function CartItem({ item }) {
    const [countOfProduct, setCountOfProduct] = useState(item.countOfProduct);
    const [cartItem, setCartItem] = useState(() => {
        for (let i = 0; i < LIST_ORDER.length; i++) {
            if (LIST_ORDER[i] === item) {
                return LIST_ORDER[i];
            }
        }
    });
    const handleSub = () => {
        setCountOfProduct((prev) => {
            if (prev >= 1) return prev - 1;
            else return 0;
        });
        item.countOfProduct--;
    };

    const handleAdd = () => {
        setCountOfProduct((prev) => prev + 1);
        item.countOfProduct++;
    };

    const handleClear = (item) => {
        setCartItem(() => {
            for (let i = 0; i < LIST_ORDER.length; i++) {
                if (LIST_ORDER[i] === item) {
                    LIST_ORDER.splice(i, 1);
                }
            }
            console.log(LIST_ORDER);
        });
    };
    return (
        <div className={cx('rows-1')}>
            <div className={cx('col-5', 'col')}>
                <input type="checkbox" />
            </div>
            <div className={cx('col-1', 'col')}>
                <img src={item.img} className={cx('img')} />
                <span>{item.nameproduct}</span>
            </div>
            <div className={cx('col-2', 'col')}>
                <div className={cx('count-product')}>
                    <button onClick={handleSub} className={cx('sub-btn')}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{countOfProduct}</span>
                    <button onClick={handleAdd} className={cx('add-btn')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className={cx('col-3', 'col')} style={{ color: '#ee4d2d' }}>
                {item.countOfProduct * item.price}đ
            </div>
            <div className={cx('col-4', 'col')}>
                <button onClick={() => handleClear(cartItem)}>Delete</button>
            </div>
        </div>
    );
}

export default CartItem;
