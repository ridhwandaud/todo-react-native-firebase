import types  from '../_actions/types';
const INITIAL_STATE = {
	loading: false,
};


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {	
		case types.TODO_FETCH_START:
			return { loading: true };
		case types.TODO_FETCH_SUCCESS:
			return { loading: false, todoList: action.payload };
		default:
		  return state;
	}
}