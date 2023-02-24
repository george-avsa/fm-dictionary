import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import { toggleDropdown } from '../store/settings/settings-actions';
import { selectActiveFont } from '../store/settings/settings-selectors';
import FontDropdown from './FontDropdown';

export default function FontSwitcher() {

    const [activeFont, dropdown] = useSelector(selectActiveFont);
    const dispatch = useDispatch(); 

    return (
        <div className='font-switcher' onClick={(e) => {dispatch(toggleDropdown())}}>
            <p>{activeFont}</p>
            <img src={arrowDown} alt='dropdown' />
            {dropdown && <FontDropdown></FontDropdown>}
        </div>
    )
}
