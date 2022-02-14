//user scema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: {type:String,
        required:true},
    age: Number,
    favoriteFoods: [String]
})


module.exports=user=mongoose.model("user",userSchema);