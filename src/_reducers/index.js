import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import TodoReducer from './todoReducer';

export default combineReducers({
  LoginReducer,
  todos: TodoReducer,
}); 