// todo_model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({

	title: {
		type: String,
		required: true 
	},
	
	desc: {
		type: String,
		required: true 
	},

	done: { type: Boolean, 
		default: false 
	},

	date: {
    	type: Date,
    	default: Date.now
  	}
  	
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
