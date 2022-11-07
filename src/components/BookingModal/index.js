import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './BookingModal.module.scss';

const cx = classNames.bind(styles);

function BookingModal({ onOpen }) {
    const [time, setTime] = useState();
    const [description, setDescription] = useState();

    const handleSubmit = () => {};

    return (
        <div className={cx('dark-bg')} onClick={() => onOpen(false)}>
            <div
                className={cx('container')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <form className={cx('content')} onSubmit={handleSubmit}>
                    <h2 className={cx('header')}>Book an appointment</h2>
                    <div className={cx('user-name')}>
                        <div className={cx('title')}>Time</div>
                        <input
                            className={cx('input-username')}
                            value={time}
                            onChange={(e) => {
                                setTime(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx('pass-word')}>
                        <div className={cx('title')}>Description</div>
                        <input
                            type="password"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            className={cx('input-password')}
                            spellCheck={false}
                        />
                    </div>
                    <div className={cx('save')}>
                        <button className={cx('save-btn')} type="submit">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingModal;
