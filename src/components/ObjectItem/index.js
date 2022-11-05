import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { CUSTOMER_LIST } from '../../pages/CustomerList';
import ChangeModal from '../ChangeModal';

import styles from './ObjectItem.module.scss';

const cx = classNames.bind(styles);

function ObjectItem({ data, count }) {
    const userList = JSON.parse(localStorage.getItem('userList'));
    const handleClear = () => {
        for (let i = 0; i < userList.length; i++) {
            if (data.userName === userList[i].username) {
                setVisible(false);
            }
        }
    };

    const handleChange = () => {
        setIsOpen(true);
    };

    const [visible, setVisible] = useState(true);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {visible && (
                <div className={cx('rows-2')} key={count}>
                    <div className={cx('col-1', 'col')}>{count + 1}</div>
                    <div className={cx('col-2', 'col')} style={{ fontSize: 14 }}>
                        {data.userName}
                    </div>
                    <div className={cx('col-3', 'col')}>
                        <input type="password" value={data.password} className={cx('password')} />
                    </div>
                    <div className={cx('col-4', 'col')} style={{ fontSize: 14 }}>
                        {data.fullName || data.medicalShopName}
                    </div>
                    <div className={cx('col-5', 'col')}>
                        <input type="email" value={data.email} className={cx('email')} />
                    </div>
                    <div className={cx('col-6', 'col')}>
                        <div style={{ fontSize: 14, color: 'red', cursor: 'pointer' }} onClick={handleClear}>
                            Clear
                        </div>
                        <div style={{ fontSize: 14, color: 'blue', cursor: 'pointer' }} onClick={handleChange}>
                            Change
                        </div>
                    </div>
                    {isOpen && <ChangeModal onOpen={setIsOpen} data={data} />}
                </div>
            )}
        </>
    );
}

export default ObjectItem;
