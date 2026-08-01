const express=require('express');
const app=express();
function logger(req,res,next){
    console.log('Request:',req.method,req.url);
    next();
}
app.use(logger);
app.get('/',(req,res)=>{
    res.send('Middleware works!');
});
app.listen(3002,()=>{
    console.log('Server running at http://localhost:3002');
});