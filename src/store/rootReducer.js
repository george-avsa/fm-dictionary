import { combineReducers } from "redux";
import { dictionaryReducer } from "./dictionary/dictionary-reducer";
import { settingsReducer } from "./settings/settings-reducer";

export const rootReducer =  combineReducers({
    dictionary: dictionaryReducer,
    settings: settingsReducer,
});