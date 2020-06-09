import bucketModel from "../models/bonus_bucketname"
class MongoDao
{
    daoObject:any;
    constructor()
    {
        this.daoObject=bucketModel;
    }
    async save(insertObj:Object)
    {
        try
        {
            return await this.daoObject.create(insertObj);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    async getAll(criteria:Object,projections="",options={lean:true})
    {
        try{
            return this.daoObject.find(criteria,projections,options);
        }
        catch(err)
        {
            console.log(err)
        }
    }
    async getByBucketName(criteria:Object,projections="",options={lean:true})
    {
        try{
        return this.daoObject.find(criteria,projections,options);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    async getByBonusCodeName(criteria:Object,projections="",options={lean:true})
    {
        try{
            return this.daoObject.find(criteria,projections,options);
        }
        catch(err)
        {
            console.log(err);
        }
    }
}
export default new MongoDao();