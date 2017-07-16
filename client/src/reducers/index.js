import { combineReducers } from 'redux';

import home from './home';
import legislation from './legislation';
import member from './member';

const reducers = combineReducers({
  home,
  legislation,
  member
});

export default reducers;
