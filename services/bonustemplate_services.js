const bonusTemplateDao = require( "../dao_manager/bonustemplate_dao");
const responseCode=require("../utils/response-code")
const logger=require("../utils/logger")
const path=require("path")
module.exports=class BonusTemplateServices
{
    static addBonusTemplate=async (requestObject)=>
{
    let responseObject=null;
    
    let dataToAdd = {
        name: requestObject.name,
        bonusType:requestObject.bonusType,
        bonusCode: requestObject.bonusCode.toUpperCase(),
        ibAmount: requestObject.ibAmount,
        bbAmount: requestObject.bbAmount,
        ticketData: requestObject.ticketData,
        status:requestObject.status,
        startDate:requestObject.startDate,
        endDate:requestObject.endDate,
        devices: requestObject.devices,
        channel: requestObject.channel,
        campaign: requestObject.campaign
    };
    try
    {
        responseObject=await bonusTemplateDao.insert(dataToAdd);
        responseObject.code=responseCode.SUCCESS;
        responseObject.data={};
    }
    catch(err)
    {
       responseObject.code=responseCode.SOME_INTERNAL_ERROR;
       responseObject.data={};
       logger.error(
        {
            error:error.message,
            methodName:"addBonusTemplate",
            fileName:path.basename(__filename),
        }
        )
    }
    return responseObject;
}
static findAllBonusTemplate=async (requestObject={})=>{
    let responseObject=null;
    try{
        let query={};
        responseObject=await bonusTemplateDao.find(query);
        responseObject.code=responseCode.SUCCESS;
        responseObject.data={};
    }
    catch(err)
    {
        responseObject.code=responseCode.SOME_INTERNAL_ERROR;
        responseObject.data={};
        logger.error(
            {
                error:error.message,
                methodName:"findAllBonusTemplate",
                fileName:path.basename(__filename),
            }
            )
    }
    return responseObject;
}
static findOneBonusTemplate=async (requestObject)=>{
    let responseObject=null;
    try
    {
        let query={_id:null};
        if (requestObject && requestObject.id){
            query._id= requestObject.id
        }
        responseObject=await bonusTemplateDao.findOne(query);
        responseObject.code=responseCode.SUCCESS;
        responseObject.data={};
    }
    catch(err)
    {
        responseObject.code=responseCode.SOME_INTERNAL_ERROR;
        responseObject.data={};
        logger.error(
            {
                error:error.message,
                methodName:"findOneBonusTemplate",
                fileName:path.basename(__filename),
            }
            )
    }
    return responseObject;
}
static updateBonusTemplate=async (requestObject)=>{
    let responseObject=null;
    try
    {
        let query={
            _id: requestObject._id
        };
        let dataToUpdate={name:null,
                          bonusType:null,
                          bonusCode:null,
                          ibAmount:null,
                          bbAmount:null,
                          ticketDate:null,
                          status:null,
                          startDate:null,
                          endDate:null,
                          devices:null,
                          channel:null,
                          campaign:null
                        };
        if (requestObject && requestObject.name){
            dataToUpdate.name= requestObject.name
        }
        if (requestObject && requestObject.bonusType){
            dataToUpdate.bonusType= requestObject.bonusType
        }
        if (requestObject && requestObject.bonusCode){
            dataToUpdate.bonusCode= requestObject.bonusCode.toUpperCase()
        }

        if (requestObject && requestObject.ibAmount){
            dataToUpdate.ibAmount= requestObject.ibAmount
        }

        if (requestObject && requestObject.bbAmount){
            dataToUpdate.bbAmount= requestObject.bbAmount
        }

        if (requestObject && requestObject.ticketDate){
            dataToUpdate.ticketDate= requestObject.ticketDate
        }

        if (requestObject && requestObject.status){
            dataToUpdate.status= requestObject.status
        }

        if (requestObject && requestObject.startDate){
            dataToUpdate.startDate= requestObject.startDate
        }

        if (requestObject && requestObject.endDate){
            dataToUpdate.endDate= requestObject.endDate
        }

        if (requestObject && requestObject.devices){
            dataToUpdate.devices= requestObject.devices
        }

        if (requestObject && requestObject.channel){
            dataToUpdate.channel= requestObject.channel
        }

        if (requestObject && requestObject.campaign){
            dataToUpdate.campaign= requestObject.campaign
        }
        responseObject=await bonusTemplateDao.update(query,dataToUpdate)
        responseObject.code=responseCode.SUCCESS;
        responseObject.data={};
    }
    catch(err)
    {
        responseObject.code=responseCode.SOME_INTERNAL_ERROR;
        responseObject.data={};
        logger.error(
            {
                error:error.message,
                methodName:"updateBonusTemplate",
                fileName:path.basename(__filename),
            }
            )
    }
    return responseObject;
}
}