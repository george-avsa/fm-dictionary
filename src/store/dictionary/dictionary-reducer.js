import { RELOAD_TRANSLATION, THROW_ERROR } from "./dictionary-actions";

const initialState = {
    noword: true,
    translation: {},
    error: false,
}

export const dictionaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case RELOAD_TRANSLATION: {
            return {
                noword: false,
                translation: action.payload,
                error: false,
            }
        }

        case THROW_ERROR: {
            return {
                noword: false,
                translation: {},
                error: true,
            }
        }

        default:
            return state;
    }
}