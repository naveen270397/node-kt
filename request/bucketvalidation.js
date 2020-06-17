const Joi =require( "@hapi/joi");
const Util=require("../utils/utils");
const bonusSchema=Joi.object().keys({
    bonusCodeName:Joi.string().required()
})
const Schema=Joi.object().keys(
    {
        bucketId:Joi.number()
                    .min(0),
        bucketName:Joi.string(),
        bonusCode:Joi.array()
                        .items(Joi.object({
                            bonusCodeId:Joi.string().required(),
                            bonusCodeName:Joi.string().required()
                            })),
        status:Joi.string().valid("ACTIVE","INACTIVE")
    }
)

 let addValidation= async function(req,res,next)
{ 
    
    try{
    req.body=await Schema.validateAsync(req.body);
    next();
    }
    catch(err)
     {
        throw err;
     }
    
}

let bucketValidation=async (req,res,next)=>{
    try
    {
        await Schema.validateAsync({bucketName:req.query.bucketName});
        next();
    }
    catch(err)
    {
        res.json(Util.errorMessage(error.detail[0]));
    }

}
let bonusValidation=async (req,res,next)=>{
    try
    {   
        await bonusSchema.validateAsync({bonusCodeName:req.query.bonusCodeName});
        next();
    }
    catch(err)
    {
        res.json(Util.errorMessage(err.detail[0]));    }
}
module.exports={
    addValidation,
    bucketValidation,
    bonusValidation
}