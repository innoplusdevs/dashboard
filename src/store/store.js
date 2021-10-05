import { createStore, combineReducers } from 'redux';
import { sidebarReducer } from '../reducers/sidebarReducer';

const reducers = combineReducers({
  sidebar: sidebarReducer,
});


export const store = createStore(
  reducers,
);