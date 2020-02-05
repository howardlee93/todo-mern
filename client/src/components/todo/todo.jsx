// todo.jsx

import React, {useEffect, useState} from 'react';

import TodoCreateFormContainer from './todo_create_form_container';

import TodoDisplayContainer from './todo_display_container';


const Todo = (props) =>{

	const todos = props.todos;


	useEffect(()=>{

		const fetchTodos = props.fetchTodos;

		fetchTodos();

	},[props.fetchTodos])


	console.log(todos);

	const displayTodo = ()=> (
			<ul className='todo-list'>
				<h2>Tasks List</h2>
				{todos.map((todo, i)=>(
					<TodoDisplayContainer key={i} todo={todo}/>
					)
				)}
			</ul>
		)


	return(
		<div>
			<h1>
				This displays the todos and the create todo form
			</h1>
		 	<div className='todo-container'>
		 		{ todos.length > 0 ? 
		 			displayTodo()
		 			: 
		 			(<div className="todo-list"><h2>You finished your todo-list!</h2></div>)
		 		}

				<TodoCreateFormContainer/>
			</div>
		
		</div>
		) 


}


export default Todo;
