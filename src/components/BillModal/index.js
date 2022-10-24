import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './BillModal.module.scss';

const cx = classNames.bind(styles);

function BillModal({ onOpen, data }) {
    const LIST_OF_PRODUCTS = data.listOfProducts;
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        setTotalCost(() => {
            let totalCostTemp = 0;
            for (let i = 0; i < data.listOfProducts.length; i++) {
                totalCostTemp += data.listOfProducts[i].totalCost;
            }
            return totalCostTemp;
        });
    }, [totalCost]);
    return (
        <div className={cx('dark-bg')} onClick={() => onOpen(false)}>
            <div
                className={cx('container')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={cx('content')}>
                    <table>
                        <tr>
                            <td colSpan={2}>#{data.id}</td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                {data.shipper ? (
                                    <>Shipper: {data.shipper}</>
                                ) : (
                                    <>
                                        Customer: {data.nameCustomer}, Phone: {data.phoneCustomer}
                                    </>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 'bold' }}>{data.nameshop}</div>
                                <div>{data.address}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Delivery Time: {data.deliveredTime}</td>
                        </tr>
                        <tr>
                            <td>No</td>
                            <td>Product</td>
                            <td>Quantity</td>
                            <td style={{ textAlign: 'right' }}>Price</td>
                        </tr>
                        {LIST_OF_PRODUCTS.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.nameproduct}</td>
                                <td style={{ textAlign: 'center' }}>{item.countOfItems}</td>
                                <td style={{ textAlign: 'right' }}>{item.totalCost}đ</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}>Total:</td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                {totalCost}đ
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Shipping Fee:</td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                +15000đ
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Discount:</td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                -20000đ
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ fontWeight: 'bold' }}>
                                Total Price:
                            </td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                {totalCost + 15000 - 20000}đ
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BillModal;
