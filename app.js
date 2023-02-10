// class-01;
// how to import package in es5 let us see now:--
const express=require("express");
const app=express();

//if user do a get req then how we can handle this now see:--
app.get(("/sahil"),(req,res)=>{
   return res.send('sahil is listining now tell me what is the project   ')
});
 
//now we have to set the port where our server is listing:--
app.listen(8000,()=>{
    console.log('my server has started now please give me some projects')
});

// more details about how to start our server
// i)npm init:-for create our server at localhost.

