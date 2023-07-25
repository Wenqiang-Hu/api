const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require('./models/Todo');

// initiate the backend server app
const app = express();
// allow app to use json as content/application type
app.use(express.json());
// Enable Express application allows requests from any domain
app.use(cors());

// get the db address from cmd mongosh
mongoose
    .connect("mongodb://127.0.0.1:27017/mern-todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

// when curl localhost:3001/todos, it will find Todo info 
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
})

app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save();
    res.json(todo);
})

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
})
app.listen(3001, () => console.log("Server started on port 3001"));
