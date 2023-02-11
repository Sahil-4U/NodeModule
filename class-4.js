//hi guys this is class-4 today we will see how you can connect mongodb to your backend:--
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//so connect our backend to database we have to install mongoose framework:-
//write cmd:-npm i mongoose
//after installation we have to sign In at mongodb atlas this is virtual storage
//connection for mongodb
const uri='mongodb+srv://Sahil:9992@cluster0.7dhdonx.mongodb.net/firstTrytoconnect';
mongoose.set('strictQuery', false);
mongoose.connect(uri)
.then(()=>{
    console.log('mongoose is connected now');
})
.catch((err)=>{
    console.log('this is error'+err);
})
//get req
app.get('/home',(req,res)=>{
    res.send('data fetching...');
})

//set your server to listen:--
app.listen(8000,()=>{
    console.log('i am ready to rock please go on')
})