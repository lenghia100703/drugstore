import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';
import SearchItem from './SearchItem';
import useDebounce from '../../hooks/useDebounce';
import request from '../../api/axios';

const cx = classNames.bind(styles);

const ITEMS = [
    {
        img: 'https://images.foody.vn/res/g111/1100012/prof/s640x400/foody-upload-api-foody-mobile-co-3a4c75c1-210901162314.jpeg',
        nameshop: 'Dụng Cụ Y Tế Á Châu - Lê Ngã',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        to: '/dung-cu-y-te-a-chau',
    },
    {
        img: 'https://images.foody.vn/res/g111/1100012/prof/s640x400/foody-upload-api-foody-mobile-co-3a4c75c1-210901162314.jpeg',
        nameshop: 'Dụng Cụ Y Tế Á Châu - Lê Ngã',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        to: '/dung-cu-y-te-a-chau',
    },
    {
        img: 'https://images.foody.vn/res/g111/1100012/prof/s640x400/foody-upload-api-foody-mobile-co-3a4c75c1-210901162314.jpeg',
        nameshop: 'Dụng Cụ Y Tế Á Châu - Lê Ngã',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        to: '/dung-cu-y-te-a-chau',
    },
    {
        img: 'https://images.foody.vn/res/g111/1100012/prof/s640x400/foody-upload-api-foody-mobile-co-3a4c75c1-210901162314.jpeg',
        nameshop: 'Dụng Cụ Y Tế Á Châu - Lê Ngã',
        address: '33 Lê Ngã, P. Phú Trung, Tân Phú, TP. HCM',
        isOpen: true,
        to: '/dung-cu-y-te-a-chau',
    },
    {
        img: 'https://images.foody.vn/res/g100/991502/prof/s640x400/foody-upload-api-foody-mobile-untitled-1-191219085648.jpg',
        nameshop: 'Nhà Thuốc Thái Minh - Mai Xuân Thưởng',
        address: '235C Mai Xuân Thưởng, P. 6, Quận 6, TP. HCM',
        isOpen: false,
        to: '/nha-thuoc-thai-minh',
    },
];

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const searchRef = useRef();

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        searchRef.current.focus();
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        request
            .get('medical-shop/search', {
                params: {
                    searchParam: debounced,
                },
            })
            .then((res) => {
                console.log(res.data);
                setSearchResult(res.data);
                setLoading(false);
            });
    }, [debounced]);

    return (
        <HeadlessTippy
            placement="bottom"
            interactive={true}
            offset={[0, 0]}
            visible={searchResult.length > 0 && showResults}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs} className={cx('wrapper-popper')}>
                    {searchResult.slice(0, 5).map((item, index) => (
                        <SearchItem key={index} data={item} />
                    ))}
                </div>
            )}
            onClickOutside={() => setShowResults(false)}
        >
            <div className={cx('form-search')}>
                <input
                    ref={searchRef}
                    value={searchValue}
                    onChange={handleSearch}
                    onFocus={() => setShowResults(true)}
                    placeholder="Tìm nhà thuốc, cửa hàng hóa mỹ phẩm..."
                    className={cx('input-search')}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
