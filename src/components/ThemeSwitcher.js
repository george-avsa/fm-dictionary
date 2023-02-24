import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/settings/settings-actions';
import themeIcon from './../assets/images/icon-moon.svg';

export default function ThemeSwitcher() {

    const dispatch = useDispatch();

    const handleThemeSwitcher = () => {
        dispatch(toggleTheme());
    }

    return (
        <div className='theme' onClick={handleThemeSwitcher}>
            <div className='theme-switcher'>
                <div className='theme-switcher__circle'></div>
            </div>
            <img src={themeIcon} alt='nightmode' />
        </div>
    )
}
