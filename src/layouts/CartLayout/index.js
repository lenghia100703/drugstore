import classNames from 'classnames/bind';
import Header from '../../components/Header';

import styles from './CartLayout.module.scss';

const cx = classNames.bind(styles);

function CartLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default CartLayout;
