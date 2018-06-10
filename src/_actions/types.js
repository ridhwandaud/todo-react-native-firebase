const loginActionTypes = {
	LOGIN_USER: 'LOGIN_USER',
	LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
	LOGIN_USER_FAIL: 'LOGIN_USER_FAIL',
	LOGOUT_USER: 'LOGOUT_USER',
	LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL',
	SIGNUP_USER: 'SIGNUP_USER',
	SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
};

const todoActionTypes = {
	TODO_CREATE: 'TODO_CREATE',
	TODO_FETCH_START: 'TODO_FETCH_START',
	TODO_FETCH_SUCCESS: 'TODO_FETCH_SUCCESS',
};	


export default {
	...loginActionTypes,
	...todoActionTypes,
};