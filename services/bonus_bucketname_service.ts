import MongoDaoObject from "../dao_manager/bonus_bucketname_dao"
export default class BucketNameBonusService
{   
    static async add(requestObject:any)
    {
        try
        {
            return await MongoDaoObject.save(requestObject);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    static async getAll(requestObject={})
    {

        try
        {
            return await MongoDaoObject.getAll(requestObject);
        }
        catch(err)
        {
            console.log(err);
        }

    }
    static async getByBucketName(requestObject:any)
    {
        const query={
            bucketName:requestObject.query.bucketName
        }
        try
        {
            return await MongoDaoObject.getByBucketName(query);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    static async getByBonusCodeName(requestObject:any)
    {
        const query={
            bonusCode:{
                    bonusCodeName:requestObject.query.bonusCodeName
            }
        }
        try
        {
            return await MongoDaoObject.getByBonusCodeName(query);
        }
        catch(err)
        {
            console.log(err);
        }
    }
}