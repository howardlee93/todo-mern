import {connect} from 'react-redux';
import TodoCreateForm from './todo_create_form';
import {createTodo} from '../..//actions/todo_action';


const mapDispatchToProps = dispatch =>({

	createTodo: data => dispatch(createTodo(data))

});


export default connect(null, mapDispatchToProps)(TodoCreateForm);
