const express= require("express");
const path = require("path");
const publicPath=path.join(__dirname);

const app=express();
const port=8000;

app.get("/", (req,res)=>{
    res.sendFile("index.html", { root: publicPath });
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});