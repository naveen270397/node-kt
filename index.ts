import express from "express"
import bodyParser, { urlencoded } from "body-parser"
import {router} from "./routes/routes"
import mongoose from "mongoose"
class App
{
    public expressapp:express.Application;
    private mongoUrl:string;
    constructor()
    {
        this.expressapp= express();
        this.mongoUrl="mongodb://127.0.0.1:27017/testdb";
        this.config();
        this.initializeMongo();
        this.expressapp.use("/bucketnamebonuscode",router);
    }
    private config()
    {
        this.expressapp.use(bodyParser.json());
        this.expressapp.use(urlencoded({extended:true}));
    }
    private initializeMongo()
    {
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true});
    }
}   
export default new App().expressapp;