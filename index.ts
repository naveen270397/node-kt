import express from "express"
import bodyParser from "body-parser"
import {Routes} from "./routes/user-route"
import  mongoose  from "mongoose";
class RestApp{
    public app:express.Application;
    private mongoUrl:string;
    private userRoutes=new Routes();
    constructor(){
        this.app=express();
        this.config();
        this.userRoutes.routes(this.app);
        this.mongoUrl="mongodb://127.0.0.1:27017/testdb"
        this.initializeMongoUrl();
        
    }
    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
    }
    private initializeMongoUrl()
    {
        mongoose.connect(this.mongoUrl);
    }
}
export default new RestApp().app;