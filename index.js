const express =require( "express");
const bodyParser =require("body-parser");
const router = require("./routes/routes")
const mongoose= require("mongoose");
class App
{
     expressapp
     mongoUrl
    constructor()
    {
        this.expressapp= express();
        this.mongoUrl="mongodb://127.0.0.1:27017/testdb";
        this.config();
        this.initializeMongo();
        this.expressapp.use("/bucketlist",router);
    }
     config()
    {
        this.expressapp.use(bodyParser.json());
        this.expressapp.use(express.urlencoded({extended:true}));
    }
     initializeMongo()
    {
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true});
    }
}   
module.exports= new App().expressapp;