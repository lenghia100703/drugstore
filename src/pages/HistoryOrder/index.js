import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './HistoryOrder.module.scss';

const cx = classNames.bind(styles);

const DATA_ORDER = [
    {
        stt: 1,
        id: '14141-1231241',
        orderedTime: '24/09/2022 11:45',
        deliveredTime: '14/10/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tạ Đức Mạnh',
        totalCost: 73000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 2,
        id: '14233-3192391',
        orderedTime: '10/09/2022 11:45',
        deliveredTime: '11/9/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tiên Minh Hòa',
        totalCost: 55000,
        countOfItems: 1,
        status: true,
    },
    {
        stt: 3,
        id: '19832-1329421',
        orderedTime: '10/10/2022 13:45',
        deliveredTime: '11/10/2022 4:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Nguyễn Đức Minh',
        totalCost: 60000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 1,
        id: '14141-1231241',
        orderedTime: '24/09/2022 11:45',
        deliveredTime: '14/10/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tạ Đức Mạnh',
        totalCost: 73000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 2,
        id: '14233-3192391',
        orderedTime: '10/09/2022 11:45',
        deliveredTime: '11/9/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tiên Minh Hòa',
        totalCost: 55000,
        countOfItems: 1,
        status: true,
    },
    {
        stt: 3,
        id: '19832-1329421',
        orderedTime: '10/10/2022 13:45',
        deliveredTime: '11/10/2022 4:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Nguyễn Đức Minh',
        totalCost: 60000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 1,
        id: '14141-1231241',
        orderedTime: '24/09/2022 11:45',
        deliveredTime: '14/10/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tạ Đức Mạnh',
        totalCost: 73000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 2,
        id: '14233-3192391',
        orderedTime: '10/09/2022 11:45',
        deliveredTime: '11/9/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tiên Minh Hòa',
        totalCost: 55000,
        countOfItems: 1,
        status: true,
    },
    {
        stt: 3,
        id: '19832-1329421',
        orderedTime: '10/10/2022 13:45',
        deliveredTime: '11/10/2022 4:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Nguyễn Đức Minh',
        totalCost: 60000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 1,
        id: '14141-1231241',
        orderedTime: '24/09/2022 11:45',
        deliveredTime: '14/10/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tạ Đức Mạnh',
        totalCost: 73000,
        countOfItems: 2,
        status: true,
    },
    {
        stt: 2,
        id: '14233-3192391',
        orderedTime: '10/09/2022 11:45',
        deliveredTime: '11/9/2022 12:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Tiên Minh Hòa',
        totalCost: 55000,
        countOfItems: 1,
        status: true,
    },
    {
        stt: 3,
        id: '19832-1329421',
        orderedTime: '10/10/2022 13:45',
        deliveredTime: '11/10/2022 4:40',
        nameshop: 'Nhà Thuốc EcoPharmaceuticals',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        shipper: 'Nguyễn Đức Minh',
        totalCost: 60000,
        countOfItems: 2,
        status: true,
    },
];

function HistoryOrder() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Lịch sử đơn hàng</h1>
            <div className={cx('body')}>
                <div className={cx('table-address-header')}>
                    <div className={cx('rows-1')}>
                        <div className={cx('col-1', 'col')}>STT</div>
                        <div className={cx('col-2', 'col')}>Mã đơn hàng</div>
                        <div className={cx('col-3', 'col')}>Thời gian</div>
                        <div className={cx('col-4', 'col')}>Địa điểm</div>
                        <div className={cx('col-5', 'col')}>Shipper</div>
                        <div className={cx('col-6', 'col')}>Tổng tiền</div>
                        <div className={cx('col-7', 'col')}>Trạng thái</div>
                    </div>
                </div>
                <div className={cx('table-address-body')}>
                    {DATA_ORDER.map((item, index) => (
                        <div className={cx('rows-2')} key={index}>
                            <div className={cx('col-1', 'col')}>{item.stt}</div>
                            <div className={cx('col-2', 'col')}>{item.id}</div>
                            <div className={cx('col-3', 'col')}>
                                <div>Thời gian đặt: {item.orderedTime}</div>
                                <div>Thời gian giao: {item.deliveredTime}</div>
                            </div>
                            <Link to={'/nha-thuoc-ecopharmaceuticals'} className={cx('col-4', 'col')}>
                                <div style={{ fontWeight: 700 }}>{item.nameshop}</div>
                                <div>{item.address}</div>
                            </Link>
                            <div className={cx('col-5', 'col')}>{item.shipper}</div>
                            <div className={cx('col-6', 'col')}>
                                <div>{item.totalCost}đ</div>
                                <div>{item.countOfItems} items</div>
                            </div>
                            <div className={cx('col-7', 'col')}>
                                {item.status ? (
                                    <div className={cx('complete')}>Complete</div>
                                ) : (
                                    <div className={cx('incomplete')}>Fail</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryOrder;
