// todo_api_util.js

import axios from 'axios';


export const getTodos = () => {
	return axios.get('/api/todos')
};


export const createTodo = data => {
	return axios.post('/api/todos/', data)
};


export const getSingleTodo = id => {
	return axios.get(`/api/todos/${id}`)
};


export const updateTodo = (id, data) => {
	return axios.put(`/api/todos/${id}`, data)

};


export const deleteTodo = (id) => {
	return axios.delete(`/api/todos/${id}`)
};

