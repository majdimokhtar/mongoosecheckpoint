const express =require('express');
//inint
const app = express();
const connectDB= require ('./config/connectDB');
//import schema
const user= require ('./models/users');
//json postman
app.use(express.json());


connectDB()

require('dotenv').config();

//user add

app.post("/add" , async (req,res)=>{
    try {
        let newUser = new user ({...req.body});
        let result = await newUser.save()

        
        res.send({result,msg:'successfully added'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
})


//user find

app.get("/" , async (req,res)=>{
    try {
        let result = await user.find()
        res.send({result,msg:'all users found'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
});

//find one
app.get("/" , async (req,res)=>{
    try {
        let result = await user.findOne({name:'Majdi'})
        res.send({result,msg:'found it'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
});

//find by id

app.get("/" , async (req,res)=>{
    try {
        let result = await user.findById('620a252daa61447c8bdd26da')
        res.send({result,msg:'found it'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
});
//find one and update

app.post("/" , async (req,res)=>{
    try {
        let result = await user.findOneAndUpdate({age:30},{name:'Majdi1'} ,{new:true})
        res.send({result,msg:'updated'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
});

//remove


app.delete("/" , async (req,res)=>{
    try {
        let result = await user.remove({name:"Majdi"})
        res.send({result,msg:'deleted'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
});



//server creation
app.listen(process.env.PORT,(err)=>{
    err?console.log('err'):console.log("server is runing"+process.env.PORT)
});
