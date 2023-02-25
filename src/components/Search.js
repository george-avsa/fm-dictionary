import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTranslation } from '../store/dictionary/dictionary-actions';
import searchButton from './../assets/images/icon-search.svg'
import SearchError from './SearchError';

export default function Search() {

    // local state to manipulate search input
    const [searchValue, setSearchValue] = useState(''); 
    const [serchError, setSerchError] = useState(false);

    const handleSearchValue = e => {
        const currentSearchValue = e.target.value;
        setSearchValue(currentSearchValue);
    }

    useEffect(() => {
        if (searchValue) {
            setSerchError(false);
        }
    }, [searchValue]);


    const dispatch = useDispatch();

    const handleSearch = (e) => {
        // canceling page reloading
        e.preventDefault();
        
        if (!searchValue) {
            setSerchError(true);
        } else {
            dispatch(getTranslation(searchValue));
        }
        
        e.target.reset();
    }

    return (
        <form className='search' onSubmit={handleSearch}>
            <input type='text' 
                className={`search__input ${serchError && 'search__input--error'}`} 
                maxlength='60' 
                onChange={handleSearchValue} 
                value={searchValue} 
                name='searchInput'
                />

            <button type='button' className='search__button'>
                <img src={searchButton} alt='search' />
            </button>
            {serchError && <SearchError />}            
        </form>
    )
}
