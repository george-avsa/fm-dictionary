import React from 'react'
import { useDispatch } from 'react-redux';
import { changeFont, toggleDropdown } from '../store/settings/settings-actions';


export default function FontDropdown() {
    const fontList = [
        'Sans Serif',
        'Serif',
        'Mono',
    ];
    
    const dispatch = useDispatch();

    const handleSwitcher = (e) => {
        dispatch(changeFont(e.target.innerText))
        dispatch(toggleDropdown());
    }

    return (
        <div className='font-switcher__dropdown' onClick={e => e.stopPropagation()}>
            {fontList.map(font => (
                <p key={font} onClick={handleSwitcher}>
                    {font}
                </p>
            ))}
        </div>
    )
}
