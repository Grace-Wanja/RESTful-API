const express = require('express');

const app = express();

const port = 3000; //applications run on port

app.listen(port, ()=>{
    console.log(`Application is running on port ${port}`);
})

app.get('/', (req, res)=>{
    res.send('Hello, World!');
})

app.get('/name', (req, res)=>{
    res.send('Hi, Grace!');
})