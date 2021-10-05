import { types } from '../types/types';

export const sidebarReducer = (state = false, action) => {

  switch (action.type) {
    case types.openSidebar:
      return true;

    case types.closeSidebar:
      return false;

    default:
      return state;
  }
}