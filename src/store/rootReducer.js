import { combineReducers } from "redux";
import { settingsReducer } from "./settings/settings-reducer";

export const rootReducer =  combineReducers({
    settings: settingsReducer,
});