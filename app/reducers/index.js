import { combineReducers } from 'redux';

import { sceneReducer } from './sceneReducer';
import { userReducer } from './userReducer';

export const appReducer = combineReducers({
    sceneReducer,
    userReducer,
});
