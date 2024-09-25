const express = require('express');
const app = express();
const images = require('./review.json');
const cors = require('cors')

app.use(cors())
app.use(express.json())    

app.get('/api/reviewimages',(req,res)=>{
    res.json(images)
})


app.listen(8000,()=>{
    console.log("Server is running.");
    
})
