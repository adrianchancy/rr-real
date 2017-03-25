import ACTION_TYPES from './actionTypes';

export const addToUserList = (item) => {
    return { type: 'ADD_USER', item };
}

export const removeFromUserList = (id) => {
    return { type: 'REMOVE_USER', id };
}
