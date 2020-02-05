// todo_routes_api.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo_model')


//test 


router.get("/test", (req, res) => res.json({ msg: "This is the todo route" }));

//get all todos
router.get("/", (req, res) => {
	Todo.find()
	.then(todos => res.json(todos))
	.catch(err => res.status(404).json({notodosfound: 'No todos found'}))
});

//get todo by id
router.get("/:id", (req, res) => {
	Todo.findById(req.params.id)
	.then(todo => res.json(todo))
	.catch(err=> 
		res.status(404).json({
			notodosfound: 'no todo with this ID found'
		}))
});

//create todo

router.post('/', (req, res)=>{
	const newTodo = new Todo({
		title: req.body.title,
		desc: req.body.desc
	});
	newTodo.save()
	.then( todo=>  res.json(todo))
	.catch(err=> res.json(err));
});


//deprecation warning 

router.put('/:id', (req, res) =>{
	mongoose.set('useFindAndModify', false);

	Todo.findByIdAndUpdate(req.params.id,
		{
			title: req.body.title,
			desc: req.body.desc,
			done: false// will want to set default to false
		}, 
		{new: true })
	
	.then(todo =>{
		res.json({"msg": 'updated success'})
	})
	.catch(err=>res.status(404).json({error: 'Unable to update the Database'}))
});


//delete todo 

router.delete("/:id", (req, res)=>{
	Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    	if(err){
    		return res.json({'success':false,'message':'Some Error'});
    	}

    	return res.json({'success':true,'message':todo.title+' deleted successfully'});
  	});
});


module.exports = router;
