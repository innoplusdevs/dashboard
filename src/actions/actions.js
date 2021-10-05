import { types } from '../types/types';

export const sidebarCollapsed = (collapsed) => ({
  type: collapsed ? types.openSidebar : types.closeSidebar
});