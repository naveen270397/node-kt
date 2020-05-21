import mongoose from "mongoose"
const teacherModel=new mongoose.Schema({
    firstName:{
        type:String,
        required:"firstName is must"
    },
    lastName:{
        type:String,
        
    },
    phoneNo:{
        type:Number
    },
    dateJoined:
    {
        type:Date,
        default:Date.now
    }
});
export default mongoose.model("teacher",teacherModel);