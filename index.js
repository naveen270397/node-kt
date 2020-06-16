const express =require("express");
const mongoose =require( "mongoose");
const bodyParser =require( "body-parser");
const route =require( "./routes/routes");
class App
{
     expressApp;
     mongoUrl;
    constructor()
    {
        this.expressApp=express();
        this.mongoUrl="mongodb://127.0.0.1:27017/testdb"
        this.initialiseConnection();
        this.config();
        this.expressApp.use("/bonus",route);

    }
     config()
    {
        this.expressApp.use(express.json());
        this.expressApp.use(express.urlencoded({extended:true}));
    }
     initialiseConnection()
    {
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true});
    }
}
module.exports= new App().expressApp;