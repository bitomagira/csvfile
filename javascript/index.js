const express = require('express');

const app = express();

const port = 3000;

app.get("/",(req,res)=>console.log("hello world"));


app.listen(port,()=>console.log("server started on 3000"));