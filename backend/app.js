const express = require("express");
require('dotenv').config(); 
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(express.json()); 

// Mount your routes here so both tests and index.js can access them
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.status(200).send("API is running...");
});

module.exports = app;