import { connect } from 'react-redux';
import {fetchTodos} from '../..//actions/todo_action';

import Todo from './todo';


const mapStateToProps = state =>({
	todos: state.todos
});


const mapDispatchToProps = dispatch =>({
	fetchTodos: () => dispatch(fetchTodos())

});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
