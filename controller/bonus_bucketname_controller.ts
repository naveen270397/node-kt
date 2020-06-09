import BucketNameBonusService from "../services/bonus_bucketname_service"
import {Request,Response} from "express"

export default class BucketNameController
{
    async add(req:Request,res:Response)
    {
        let responseObject=null;
        try
        {
            responseObject=await BucketNameBonusService.add(req.body);
            
            
        }
        catch(err)
        {
            console.log(err);
        }
        res.json(responseObject);
    }
    async findAll(req:Request,res:Response)
    {
        let responseObject=null;
        try
        {
            responseObject=await BucketNameBonusService.getAll();
         
        }
        catch(err)
        {
            console.log(err)
        }
        res.json(responseObject);
    }
    async findByBucketName(req:Request,res:Response)
    { 
        let responseObject=null;
        try
        {
                responseObject=await BucketNameBonusService.getByBucketName(req);
        }
        catch(err)
        {
            console.log(err);
        }
        res.json(responseObject);
    }
    async findByBonusCodeName(req:Request,res:Response)
    {
        let responseObject=null;
        try{
                responseObject=await BucketNameBonusService.getByBonusCodeName(req);
        }
        catch(err)
        {
            console.log(err);
        }
        res.json(responseObject);
    }
}