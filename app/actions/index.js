import ACTION_TYPES from './actionTypes';

export const addToUserList = (item) => {
    return { type: 'ADD_USER', item };
}

export const removeFromUserList = (id) => {
    return { type: 'REMOVE_USER', id };
}

export const cleanUIState = () => {
    return { type: 'CLEAN_UISTATE'};
}

export const updateUIState = (text) => {
    return { type: 'UPDATE_UISTATE', text};
}
