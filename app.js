const express = require('express');
const cors = require('cors');
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

const todos = require('./routes/todo_routes_api')


app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


//tests 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => res.send("Hello World!!"));


//database setup 

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});



app.use('/api/todos', todos);


