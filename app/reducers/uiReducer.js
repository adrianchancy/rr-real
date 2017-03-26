import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  textinput:"ss"
}

export function uiReducer(state = initialState, action) {
    const uiList = { ...state.uiList };
  switch (action.type) {
    case ACTION_TYPES.CLEAN_UISTATE:
      return Object.assign({}, state, {
        textinput: ""
      })
    case ACTION_TYPES.UPDATE_UISTATE:
      return Object.assign({}, state, {
        textinput: action.text
      })
   default:
      return state
  }
}
