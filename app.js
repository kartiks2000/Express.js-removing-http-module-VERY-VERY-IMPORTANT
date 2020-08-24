const express = require('express');


const app = express();

app.use((req,res,next)=>{
    console.log("hell this is middleware function 1");
    next();
});

app.use((req,res,next)=>{
    console.log("hell this is middleware function 2");
    next();
});

app.use((req,res,next)=>{
    console.log("hell this is middleware function 3");
    res.send('<h1>Hello this is my response!!</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);

// WE COULD REPLACE THE ABOVE COMMENTED CODE BY -:

app.listen(3000);

// So now we dont need to import and use 'http' module






