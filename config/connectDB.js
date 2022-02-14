//connect db

const mongoose = require('mongoose');



const connectDB=async() =>{
    try {
        await  mongoose.connect('mongodb://localhost:27017/users');
        console.log("database is connected");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB;