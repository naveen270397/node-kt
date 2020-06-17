const  MongoDaoObject=require("../dao_manager/bonus_bucketname_dao");
const responseCode=require("../utils/response-code")
const logger=require("../utils/logger")
const path=require("path")
module.exports= class BucketNameBonusService
{   
    static async add(requestObject)
    {
        let responseObject={};
        try
        {
            let querydata=  await MongoDaoObject.save(requestObject);
            responseObject.code=responseCode.SUCCESS;
            responseObject.data=querydata;
        }
        catch(error)
        {
            responseObject.code=responseCode.SOME_INTERNAL_ERROR;
             responseObject.data={};
             logger.error(
                {
                    error:error.message,
                    methodName:"add",
                    fileName:path.basename(__filename),
                }
                )
            
        }
        return responseObject;

    
    }
    static async getAll(requestObject={})
    {        let responseObject={};


        try
        {
            let querydata= await MongoDaoObject.getAll(requestObject);
            responseObject.code=responseCode.SUCCESS;
            responseObject.data=querydata;
        }
        catch(error)
        {
            responseObject.code=responseCode.SOME_INTERNAL_ERROR;
       responseObject.data={};
       logger.error(
        {
            error:error.message,
            methodName:"getAll",
            fileName:path.basename(__filename),
        }
        )

        }
        return responseObject;


    }
    static async getByBucketName(requestObject)
    {
        let responseObject={};

        const query={
            bucketName:requestObject.query.bucketName
        }
        try
        {
            let querydata= await MongoDaoObject.getByBucketName(query);
            responseObject.code=responseCode.SUCCESS;
            responseObject.data=querydata;
        }
        catch(error)
        {
            responseObject.code=responseCode.SOME_INTERNAL_ERROR;
       responseObject.data={};
       logger.error(
        {
            error:error.message,
            methodName:"getByBucketName",
            fileName:path.basename(__filename),
        }
        )
        }
        return responseObject;

    }
    static async getByBonusCodeName(requestObject)
    {  
        let responseObject={};

        const query={
           "bonusCode.bonusCodeName":requestObject.query.bonusCodeName
        }
        try
        {
            let querydata= await MongoDaoObject.getByBonusCodeName(query);
            responseObject.code=responseCode.SUCCESS;
            responseObject.data=querydata;
        }
        catch(error)
        {
            responseObject.code=responseCode.SOME_INTERNAL_ERROR;
       responseObject.data={};
       logger.error(
        {
            error:error.message,
            methodName:"getByBonusCodeName",
            fileName:path.basename(__filename),
        }
        )
        }
    return responseObject;
    }
}