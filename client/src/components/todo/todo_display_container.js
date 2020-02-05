import {connect} from 'react-redux';
import TodoDisplay from './todo_display';

import {deletingTodo} from '../../actions/todo_action';

const mapDispatchToProps = dispatch =>({
	deletingTodo: id => dispatch(deletingTodo(id))
});

export default connect(null, mapDispatchToProps)(TodoDisplay);
