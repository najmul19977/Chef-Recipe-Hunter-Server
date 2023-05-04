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

app.listen(port,()=>{
    console.log(`my first server is running on port:${port} `)

})