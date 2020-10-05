import { CHANGE_TAB_1, CHANGE_TAB_2, State, ChangeTabTypes } from './tabTypes';

const initialState: State = {
  tab: 1,
};

export const tabReducer = (state = initialState, action: ChangeTabTypes) => {
  switch (action.type) {
    case CHANGE_TAB_1:
      return {
        ...state,
        tab: 1,
      };
    case CHANGE_TAB_2:
      return {
        ...state,
        tab: 2,
      };
    default:
      return state;
  }
};
