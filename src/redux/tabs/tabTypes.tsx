const CHANGE_TAB_1 = 'CHANGE_TAB_1';
const CHANGE_TAB_2 = 'CHANGE_TAB_2';

export interface State {
  tab: number;
}

export { CHANGE_TAB_1, CHANGE_TAB_2 };

interface CHANGE_TAB_1_ACTION {
  type: typeof CHANGE_TAB_1;
}

interface CHANGE_TAB_2_ACTION {
  type: typeof CHANGE_TAB_2;
}

export type ChangeTabTypes = CHANGE_TAB_1_ACTION | CHANGE_TAB_2_ACTION;
