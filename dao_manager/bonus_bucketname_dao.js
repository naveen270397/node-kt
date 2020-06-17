const bucketModel =require( "../models/bonus_bucketname")
const path=require("path")
const logger=require("../utils/logger")
class MongoDao
{
    daoObject;
    constructor()
    {
        this.daoObject=bucketModel;
    }
    async save(insertObj)
    {
        try
        {
            return await this.daoObject.create(insertObj);
        }
        catch(error)
        {
            logger.error(
                {
                    error:error.message,
                    methodName:"save",
                    fileName:path.basename(__filename),
                }
            )
            throw error;
        }
    }
    async getAll(criteria,projections="",options={lean:true})
    {
        try{
            return await this.daoObject.find(criteria,projections,options);
        }
        catch(error)
        {
            logger.error(
                {
                    error:error.message,
                    methodName:"getall",
                    fileName:path.basename(__filename),
                }
            )
throw error;
        }
    }
    async getByBucketName(criteria,projections="",options={lean:true})
    {
        try{
        return await this.daoObject.find(criteria,projections,options);
        }
        catch(error)
        {
            logger.error(
                {
                    error:error.message,
                    methodName:"getByBucketName",
                    fileName:path.basename(__filename),
                }
            )
            throw error;
        }
    }
    async getByBonusCodeName(criteria,projections="",options={lean:true})
    {
        try{
            return await this.daoObject.fin(criteria,projections,options);
        }
        catch(error)
        {
            logger.error(
                {
                    error:error.message,
                    methodName:"getByBonusCodeName",
                    fileName:path.basename(__filename),
                }
            )
            throw error;
        }
    }
}
module.exports= new MongoDao();