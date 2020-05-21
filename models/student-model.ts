import mongoose from "mongoose"
 const studentModel= new mongoose.Schema({
    firstName:{
        type:String,
        required:"firstName is must"
    },
    lastName:{
        type:String
        },
    phoneNo:
    {
        type:Number
    },
    classTeacher:
    {
        type:String,
        required:"enter the classteacher name"
        },
    dateJoined:{
        type:Date,
        default:Date.now
    }

});
export default mongoose.model("student",studentModel);