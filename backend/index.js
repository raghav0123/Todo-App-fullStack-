const app = require('./app');
require('dotenv').config(); 
const DB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');



const PORT = process.env.PORT || 3000;

// DATABASE CONNECTION
DB();




// APP LISTENING 
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

