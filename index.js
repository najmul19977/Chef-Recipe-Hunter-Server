const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5000

const chefData = require('./data.json');
app.get('/',(req,res)=>{
    res.send('hello from my first ever server');
})
app.get ('/chefData',(req,res)=>{
    res.send(chefData);
})

app.get('/chefData/:id',(req,res)=>{
    const id = req.params.id;
    const selectedData = chefData.find(n=>n.id===id);
    res.send(selectedData);
})

const recipeData = require('./recipe.json');
app.get('/',(req,res) =>{
    res.send('hello from my second server is running');
})
app.get('/recipeData',(req,res) =>{
    res.send(recipeData);
})
app.get('/recipeData/:id',(req,res) =>{
    const id = req.params.id;
    const selectData =recipeData.find(n=>n.id ===id);
    res.send(selectData);
})

app.listen(port,()=>{
    console.log(`my first server is running on port:${port} `)

})