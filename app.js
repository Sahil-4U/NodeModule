// class-01;
// how to import package in es5 let us see now:--
const express=require("express");
const app=express();

//if user do a get req then how we can handle this now see:--
app.get(("/home"),(req,res)=>{
   return res.send('sahil is listining now tell me what is the project')
});

// now i am writting code for query:-how you can acces a query 
// after the ? a query written 
app.get("/api",(req,res)=>{
    // console.log(req.query);
    const {key1,key2,key3}=req.query;
    console.log((req.query.key1));
    return res.send('your query is solved now');
})

//now we see how the params are working :-basically if you want to use params then apko first write colon(:)and then write id and this your param
app.get("/par/:id1",(req,res)=>{
    const id=req.params;
    console.log(res);
    console.log(id);
    return res.send('params are working now');
})

// multi level params:-
app.get("/par/:id1/:id2",(req,res)=>{
    console.log(req.params.id2);
    return res.send('hi there')
})
 
//now we have to set the port where our server is listing:--
app.listen(8000,()=>{
    console.log('my server has started now please give me some projects')
});

// more details about how to start our server
// i)npm init:-for create our server at localhost.
