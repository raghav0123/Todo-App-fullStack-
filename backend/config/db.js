const mongoose = require('mongoose')
require('dotenv').config(); 

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("DATABASE CONNECTED: ", conn.connection.host)
    }
    catch(err) {
        console.log(`Database Connection Failed: `, err.message)
        process.exit(1)
    }
}

module.exports = connectDB