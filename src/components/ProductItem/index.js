import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import styles from './ProductItem.module.scss';
import Modal from '../Modal';

const cx = classNames.bind(styles);

function ProductItem({ data, onClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    <div className={cx('img')} onClick={handleOpen}>
                        <img className={cx('shop-img')} src={data.img} />
                    </div>
                    <div className={cx('title')}>
                        <div className={cx('name-product')}>{data.nameproduct}</div>
                        <span className={cx('count-order-product')}>
                            Đã được đặt <span style={{ color: '#464646', fontWeight: 700 }}>{data.countorder}</span> lần
                        </span>
                    </div>
                </div>
                <div className={cx('inner-right')}>
                    <div className={cx('price')}>{data.price}</div>
                    <span
                        style={{
                            fontWeight: 400,
                            position: 'relative',
                            top: -5,
                            fontSize: 12,
                            right: 0,
                            color: '#0288d1',
                        }}
                    >
                        đ
                    </span>
                    <div className={cx('btn-adding')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                {isOpen && <Modal onOpen={setIsOpen} data={data} />}
            </div>
        </div>
    );
}

export default ProductItem;
