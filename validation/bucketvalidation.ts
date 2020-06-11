import Joi from "@hapi/joi"
import {Request,Response, NextFunction } from "express"
const Schema=Joi.object().keys(
    {
        bucketId:Joi.number()
                    .min(0),
        bucketName:Joi.string()
                        .required(),
        bonusCode:Joi.array()
                        .items(Joi.object({
                            bonusCodeId:Joi.string().required(),
                            bonusCodeName:Joi.string().required()
                            })),
        status:Joi.string().valid("ACTIVE","INACTIVE")
    }
).with("bucketName","bonusCode")

export let validateMiddleware= function(req:any,res:any,next:NextFunction)
{ 
    if (req.path=="/add")
   {
    try{
    Schema.validate(req.body);
    next();
    }
    catch(err) {
        throw err;
        }
    }
if (req.path=="/bucketname")
{
    try
    {
        Schema.validate({bucketName:req.query.bucketName});
        next();
    }
    catch(err)
    {
        throw err;
    }
}
if (req.path=="/bonuscodename")
{
    try
    {
        Schema.validate({bonusCodeName:req.query.bonusCodeName})
        next();
    }
    catch(err)
    {
        throw err;
    }
}
}