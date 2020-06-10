import mongoose, { Schema } from "mongoose"
const bucketSchema= new mongoose.Schema({
    bucketId:{
        type:Number,
        required:true
    },
bucketName:
{
    type:String,
    required:true
},
bonusCode:{
        
            bonusCodeId:Schema.Types.ObjectId,
            
            bonusCodeName:
            {
                type:String,
                requred:true,
            },
            
},
status:{
    type:String,
    enum:["ACTIVE","INACTIVE"]
}
})
export default mongoose.model("bucketname_bonuscode",bucketSchema);