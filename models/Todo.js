const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the todo-list schema 
const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

// use the Schema as model/template
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;