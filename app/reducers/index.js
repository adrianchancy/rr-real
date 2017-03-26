import { combineReducers } from 'redux';

import { sceneReducer } from './sceneReducer';
import { userReducer } from './userReducer';
import { uiReducer } from './uiReducer';

export const appReducer = combineReducers({
    sceneReducer,
    userReducer,
    uiReducer,
});
