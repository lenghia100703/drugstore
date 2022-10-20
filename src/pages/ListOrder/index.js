import classNames from 'classnames/bind';
import { useState } from 'react';
import ShipItem from '../../components/ShipItem';

import styles from './ListOrder.module.scss';

const cx = classNames.bind(styles);

const LIST_ORDER = [
    {
        id: '14141-1231241',
        orderedTime: '24/09/2022 11:45',
        deliveredTime: '14/10/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        addressShop: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        nameCustomer: 'Tạ Đức Mạnh',
        phoneCustomer: '01234567',
        addressCustomer: '60 Lê Ngã, P. Phú Trung, Tân Phú, HN',
        listOfProducts: [
            {
                nameproduct: 'Thuốc đau đầu',
                countOfItems: 2,
                totalCost: 73000,
            },
            {
                nameproduct: 'Men tiêu hóa',
                countOfItems: 1,
                totalCost: 60000,
            },
        ],
        status: false,
    },
];

function ListOrder() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Danh sách các đơn hàng</h1>
            <div className={cx('body')}>
                <div className={cx('table-address-header')}>
                    <div className={cx('rows-1')}>
                        <div className={cx('col-1', 'col')}>STT</div>
                        <div className={cx('col-2', 'col')}>Mã đơn hàng</div>
                        <div className={cx('col-3', 'col')}>Số điện thoại</div>
                        <div className={cx('col-4', 'col')}>Địa điểm lấy thuốc</div>
                        <div className={cx('col-5', 'col')}>Địa điểm vận chuyển</div>
                        <div className={cx('col-6', 'col')}>Tổng tiền</div>
                        <div className={cx('col-7', 'col')}>Trạng thái</div>
                        <div className={cx('col-8', 'col')}>Chi tiết</div>
                        <div className={cx('col-9', 'col')}>Giao hàng</div>
                    </div>
                </div>
                <div className={cx('table-address-body')}>
                    {LIST_ORDER.map((item, index) => (
                        <ShipItem data={item} key={index} count={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListOrder;
