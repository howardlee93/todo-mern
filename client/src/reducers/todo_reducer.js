// todo_reducer.js

import {

	RECEIVE_ALL_TODOS,
	ADD_NEW_TODO ,
	TOGGLE_TODO,
	UPDATE_TODO,
	RECEIVE_ONE_TODO,
	DELETE_TODO

} from '../actions/todo_action';

export const todoReducer = (state =[], action)=>{
	Object.freeze(state);

	switch(action.type){

		case RECEIVE_ALL_TODOS:
			return action.todos.data;

		case RECEIVE_ONE_TODO:
			return action.todos.data;
			 
		case ADD_NEW_TODO:
			return Object.assign({}, state, action.payload)	

		case DELETE_TODO:
			return Object.assign({}, state, action.payload)
			
		case UPDATE_TODO:
			return Object.assign({}, state, action.payload)

		default: 
			return state;
	}


}
