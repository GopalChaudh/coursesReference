const express = require('express');
const app  = express();
const path = require('path');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,'public')))
app.get("/",(req,res)=>{ 
    res.render("home.ejs",{
        name:"Gopal"
    });
})

app.listen(8000,()=>console.log("Serever is running On port 8000"));
