import { CHANGE_FONT, TOGGLE_DROPDOWN, TOGGLE_THEME } from "./settings-actions";

const initialState = {
    active: 'Sans Serif',
    dropdown: false,
    darkTheme: false 
};

export const settingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FONT: {
            return {
                ...state,
                active: action.payload || 'Sans Serif'
            }
        }

        case TOGGLE_DROPDOWN: {
            return {
                ...state,
                dropdown: !state.dropdown
            }
        }

        case TOGGLE_THEME: {
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        }

        default:
            return state;
    }
}