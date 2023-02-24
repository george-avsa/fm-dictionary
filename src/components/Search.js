import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTranslation } from '../store/dictionary/dictionary-actions';
import searchButton from './../assets/images/icon-search.svg'

export default function Search() {

    // local state to manipulate search input
    const [searchValue, setSearchValue] = useState(''); 

    const handleSearchValue = e => {
        const currentSearchValue = e.target.value;
        setSearchValue(currentSearchValue);
    }

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        // canceling page reloading
        e.preventDefault();

        dispatch(getTranslation(searchValue));
    }

    return (
        <form className='search' onSubmit={handleSearch}>
            <input type='text' 
                className='search__input' 
                maxlength='60' 
                onChange={handleSearchValue} 
                value={searchValue} 
                name='searchInput'
                />

            <button type='text' className='search__button'>
                <img src={searchButton} alt='search' />
            </button>
        </form>
    )
}
