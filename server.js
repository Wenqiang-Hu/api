const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// initiate the backend server app 
const app = express();
// allow app to use json as content/application type 
app.use(express.json());
// Enable Express application allows requests from any domain
app.use(cors());

