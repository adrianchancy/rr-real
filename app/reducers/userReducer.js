import ACTION_TYPES from '../actions/actionTypes';

export function userReducer(state={ userList: {} }, action) {
    const userList = { ...state.userList };
    switch(action.type) {
        case ACTION_TYPES.ADD_USER:
            const newId = Object.keys(userList).length;
            userList[`user${newId}`] = action.item
            return { ...state, userList };
        case ACTION_TYPES.REMOVE_USER:
            delete userList[action.id];
            return { ...state, userList };          
        default:
            return state;
    }
};
