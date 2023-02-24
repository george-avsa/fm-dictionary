import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/settings/settings-actions';
import { selectTheme } from '../store/settings/settings-selectors';
import themeIcon from './../assets/images/icon-moon.svg';

export default function ThemeSwitcher() {

    const dispatch = useDispatch();

    const handleThemeSwitcher = (e) => {
        dispatch(toggleTheme());
    }

    const theme = useSelector(selectTheme);

    const getCirclePosition = (theme) => {
        return `theme-switcher__circle--${theme ? 'right' : 'left'}` 
    }

    return (
        <div className='theme'>
            <div className='theme-switcher' onClick={handleThemeSwitcher}>
                <div className={`theme-switcher__circle ${getCirclePosition(theme)}`}></div>
            </div>
            <img src={themeIcon} alt='nightmode' />
        </div>
    )
}
