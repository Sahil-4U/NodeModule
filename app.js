// class-01;
// how to import package in es5 let us see now:--
const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
//how you can use the variables in response:-
const val=900;
app.get("/sah",(req,res)=>{
    return res.send(`this ${val} is variable which i have written in backend`)
})
//now we will see you we can write html in backend 
app.get("/ht",(req,res)=>{
    //but when you write html you have to keep in your mind you have to use backticks okk
    return res.send(`<h2>hello node js</h2>`);
    //here style tag is not working so we will find how we can write css in backend
})

// //now we are creating an form:-
// app.get("/form",(req,res)=>{
//     return res.send(`
//     <html>
//     <head>form is ready</head>
//     <body>
//     <h1>form</h1>
//     <form>
//     <label for="name">Name</label>
//     <input type="text" name="name"></input>
//     <label for="email">Email</label>
//     <input type="text" name="email"></input>
//     <button type="submit">click me</button>
//     </form>
//     </body>
//     </html>
//     `)
// })

//now we will see how you can do post request with form:-for this we have to use two key
//keywords first is action and second is method to define the reques type let us see:-
//now we are creating an form:-
app.get("/form",(req,res)=>{
    return res.send(`
    <html>
    <head><title>form is ready</title></head>
    <body>
    <h1>form</h1>
    <form action="/form_submit" method="POST">
    <label for="name">Name</label>
    <input type="text" name="name"></input>
    <label for="email">Email</label>
    <input type="text" name="email"></input>
    <button type="submit">click me</button>
    </form>
    </body>
    </html>
    `)
})
app.post("form_submit",(req,res)=>{
    console.log(req.body);
    //but to check the req.body we have to import first express.json() at the top
    //syntax:-app.use(express.json());
    //app.use(express.urlencoded({ extended: true }));
    return res.send(`<h3>form submit successfully</h3>`);
})
 
//now we have to set the port where our server is listing:--
app.listen(8000,()=>{
    console.log('my server has started now please give me some projects')
});

// more details about how to start our server
// i)npm init:-for create our server at localhost.
