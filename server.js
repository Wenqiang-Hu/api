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

app.listen(3001, () => console.log("Server started on port 3001"));
