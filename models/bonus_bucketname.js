const mongoose=require( "mongoose");
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
bonusCode:[{
            bonusCodeId:
            {
                type:String,
                required:true
            },
            
            bonusCodeName:
            {
                type:String,
                requred:true,
            }          
}],
status:{
    type:String,
    enum:["ACTIVE","INACTIVE"]
}
})
module.exports= mongoose.model("bucketname_bonuscode",bucketSchema);