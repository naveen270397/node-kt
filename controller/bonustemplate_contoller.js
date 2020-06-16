const Services =require( "../services/bonustemplate_services");
const Util=require("../utils/utils");
const { response } = require("../utils/utils");
const responseCode = require("../utils/response-code");
class BonusTemplateController
{
    async addBonusTemplate(req,res)
    {
        let responseObject=null;
        try
        {
            let response=await Services.addBonusTemplate(req.body);
            responseObject=Util.response(response.code,response.data);
        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);
        }
        res.json(responseObject);
    }
    async findBonusTemplate(req,res)
    {
        let responseObject=null;
        try{
           let response=await Services.findAllBonusTemplate();
            responseObject=Util.response(response.code,response.data);
        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);
        }
        res.json(responseObject);
    }
    async findOneBonusTemplate(req,res)
    {   

        let responseObject=null;
        try
        {
           let response=await Services.findOneBonusTemplate(req.params);
            responseObject=Util.response(response.code,response.data);
        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);

        }
        res.json(responseObject);
    }
    async updateBonusTemplate(req,res)
    {
        let responseObject=null;
        try
        {
            let response=await Services.updateBonusTemplate(req.body);
            responseObject=Util.response(response.code,response.data);

        }
        catch(err)
        {
            responseObject=Util.response(responseCode.SOME_INTERNAL_ERROR);
        }
        res.json(responseObject);
    }

}
module.exports=BonusTemplateController;