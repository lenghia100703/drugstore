import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BillModal from '../BillModal';

import styles from './HistoryItem.module.scss';

const cx = classNames.bind(styles);

function HistoryItem({ data, count }) {
    const [isOpen, setIsOpen] = useState(false);

    const [totalCost, setTotalCost] = useState(0);
    const [countOfItems, setCountOfItems] = useState(0);

    const handleOpen = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        setTotalCost(() => {
            let totalCostTemp = 0;
            for (let i = 0; i < data.listOfProducts.length; i++) {
                totalCostTemp += data.listOfProducts[i].totalCost;
            }
            return totalCostTemp;
        });
        setCountOfItems(() => {
            let countOfItemsTemp = 0;
            for (let i = 0; i < data.listOfProducts.length; i++) {
                countOfItemsTemp += data.listOfProducts[i].countOfItems;
            }
            return countOfItemsTemp;
        });
    }, [totalCost, countOfItems]);

    return (
        <div className={cx('rows-2')} key={count}>
            <div className={cx('col-1', 'col')}>{count + 1}</div>
            <div className={cx('col-2', 'col')}>{data.id}</div>
            <div className={cx('col-3', 'col')}>
                <div>Thời gian đặt: {data.orderedTime}</div>
                <div>Thời gian giao: {data.deliveredTime}</div>
            </div>
            <Link to={'/nha-thuoc-ecopharmaceuticals'} className={cx('col-4', 'col')}>
                <div style={{ fontWeight: 700 }}>{data.nameshop}</div>
                <div>{data.address}</div>
            </Link>
            <div className={cx('col-5', 'col')}>{data.shipper}</div>
            <div className={cx('col-6', 'col')}>
                <div>{totalCost}đ</div>
                <div>{countOfItems} items</div>
            </div>
            <div className={cx('col-7', 'col')}>
                {data.status ? (
                    <div className={cx('complete')}>Complete</div>
                ) : (
                    <div className={cx('incomplete')}>Fail</div>
                )}
            </div>
            <div className={cx('col-8', 'col')}>
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleOpen}>
                    Xem chi tiết
                </span>
            </div>
            {isOpen && <BillModal onOpen={setIsOpen} data={data} />}
        </div>
    );
}

export default HistoryItem;
