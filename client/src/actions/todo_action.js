// todo_action.js

import * as APIUtil from '../util/todo_api_util';


export const RECEIVE_ALL_TODOS = 'RECEIVE_ALL_TODOS';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const RECEIVE_ONE_TODO = 'RECEIVE_ONE_TODO';



const receiveAllTodos = todos => ({
	type: RECEIVE_ALL_TODOS,
	todos
});

const receiveOneTodo = todo => ({
	type: RECEIVE_ONE_TODO,
	todo 
});

const receiveNewTodo = todo => ({
	type: ADD_NEW_TODO,
	todo
});

const deleteTodo = id =>({
	type: DELETE_TODO,
	id
})

const updateTodo = todo =>({
	type: UPDATE_TODO,
	todo
})

export const deletingTodo = id => dispatch =>(
	APIUtil.deleteTodo(id)
	.then(todo => dispatch(deleteTodo(todo.id)))
	.catch(err => console.log(err))
);

export const updatingTodo = (id, data) => dispatch =>(
	APIUtil.updateTodo(id, data)
	.then(todo => dispatch(updateTodo(todo)))
	.catch(err => console.log(err))
);


export const fetchTodos = () => dispatch => (
	APIUtil.getTodos()
	.then(todos => dispatch(receiveAllTodos(todos)))
	.catch(err => console.log(err))
);

export const createTodo = data => dispatch =>(
	APIUtil.createTodo(data)
	.then(todo => dispatch(receiveNewTodo(todo)))
	.catch(err => console.log(err))
);

export const fetchOneTodo = (id) => dispatch =>(
	APIUtil.getSingleTodo(id)
	.then(todo => dispatch(receiveOneTodo(todo)))
	.catch(err=> console.log(err))
)