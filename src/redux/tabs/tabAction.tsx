import { CHANGE_TAB_1, CHANGE_TAB_2, ChangeTabTypes } from './tabTypes';

const changeTab1 = (): ChangeTabTypes => {
  return {
    type: CHANGE_TAB_1,
  };
};

const changeTab2 = (): ChangeTabTypes => {
  return {
    type: CHANGE_TAB_2,
  };
};

export { changeTab1, changeTab2 };
