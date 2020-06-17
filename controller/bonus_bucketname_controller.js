const BucketNameBonusService =require( "../services/bonus_bucketname_service")
const Util=require("../utils/utils");
const responseCode = require("../utils/response-code");
module.exports= class BucketNameController
{
    async add(req,res)
    {
        let responseObject={};
        try
        {
            let response=await BucketNameBonusService.add(req.body);
            responseObject=Util.response(response.code,response.data);
            
        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);        }
        res.json(responseObject);
    }
    async findAll(req,res)
    {
        let responseObject={};
        try
        {
            let response=await BucketNameBonusService.getAll();
            responseObject=Util.response(response.code,response.data);
        }
        catch(err)
        {
            console.log(err);
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);        }
        res.json(responseObject);
    }
    async findByBucketName(req,res)
    { 
        let responseObject={};
        try
        {
            let response=await BucketNameBonusService.getByBucketName(req);
            responseObject=Util.response(response.code,response.data);
        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);       
         }
        res.json(responseObject);
    }
    async findByBonusCodeName(req,res)
    {
        let responseObject={};
        try{
            let response=await BucketNameBonusService.getByBonusCodeName(req);
            responseObject=Util.response(response.code,response.data);
        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);
        }
        res.json(responseObject);
    }
}