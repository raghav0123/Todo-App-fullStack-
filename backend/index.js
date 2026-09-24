const express = require("express");
require('dotenv').config(); 
const DB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

// EXPRESS APP 
const app = express();

// FIX: Added parentheses () to invoke the middleware function
app.use(express.json()); 

const PORT = process.env.PORT || 3000;

// DATABASE CONNECTION
DB();


app.use('/todos', todoRoutes);

// FIX: Make sure to send a response back, otherwise the request will hang
app.get('/', (req, res) => {
    res.status(200).send("API is running...");
});

// APP LISTENING 
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
