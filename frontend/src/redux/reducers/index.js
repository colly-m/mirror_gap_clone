import { combineReducers } from 'redux';
import userReducer from './userReducer';
import anotherReducer from './authReducer';
import mentorReducer from './mentorReducer';
import menteeReducer from './menteeReducer';

const rootReducer = combineReducers({
  user: userReducer,
  mentors: mentorReducer,
  mentees: menteeReducer,
  someReducer,
  anotherReducer,
});

export default rootReducer;