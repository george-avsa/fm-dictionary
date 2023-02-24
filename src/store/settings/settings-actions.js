export const CHANGE_FONT = 'CHANGE_FONT';
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const changeFont = (font) => ({
    type: CHANGE_FONT,
    payload: font
})

export const toggleDropdown = () => ({
    type: TOGGLE_DROPDOWN
})

export const toggleTheme = () => ({
    type: TOGGLE_THEME
})