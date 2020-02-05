import React from 'react';
import {Link, Route} from 'react-router-dom';
import TodoUpdateForm from './todo_update_form';



const TodoDisplay = (props) =>{
	
	const doneStyle ={
		textDecoration: 'line-through'
	};


	const todo= props.todo;
	console.log(todo._id);
	const id = todo._id
	return(
		<div className="todo">


		    <h3>{todo.title}</h3>
		    <p>{todo.desc}</p>
		    <p>{todo.done}</p>
		    	<button>status </button>
		    	<Link to={`/${id}`}><button>update</button></Link>
		    	<Route exact path={`/${id}`} component={TodoUpdateForm} ></Route>

		    	<button onClick={()=>props.deletingTodo(id)}>delete</button>
		</div>
	);

};


export default TodoDisplay;
