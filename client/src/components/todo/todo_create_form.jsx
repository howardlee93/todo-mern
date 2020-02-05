import React from 'react';



class TodoCreateForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:"",
			done: false,
			desc:""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		let data = this.state;
		this.props.createTodo(data);

		this.setState({	
			title:"",
			done: false,
			desc:""
		});
	}

	update(field){
		return e => this.setState({
			[field] : e.currentTarget.value
		});
	}


	render(){
		return(

			<form onSubmit={this.handleSubmit} className='todo-form'>
				<h2> Enter your task</h2>
				<input type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder="task"
                />

                <textarea
                	value={this.state.desc}
                	onChange={this.update('desc')}
                	placeholder=" task description"
                	/>
                

                <button type='submit'>Submit</button> 

			</form>
		)
	}

};


export default TodoCreateForm;
