const express=require('express');
const app =express();
app.use(express.json());
let fruits=[{id:1,name:"mango"}];

app.get('/',(req,res)=>{
    res.send('welcome to fruits API!');
});

app.post('/fruits',(req,res)=> {
    const fruit={id:fruits.length+1, name: req.body.name };
    fruits.push(fruit);
    res.status(201).send(fruit);
});

app.get('/fruits',(req,res)=>{
    res.send(fruits);
});

app.get('/fruits/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const fruit=fruits.find(f=>f.id===id);
    if(fruit){
        res.send(fruit);
    } else{
        res.status(404).send('fruit not found');
    }
});

app.delete('/fruits/:id',(req,res)=> {
    const id=parseInt(req.params.id);
    fruits=fruits.filter(fruit=>fruit.id!==id);
    res.send('Delete fruit with id:'+id);
});

app.listen(3001,()=>{
    console.log('server running at http://localhost:3001');
});
