const bonusTemplateModel =require("../models/bonustemplate");
const MongoDao =require( "./mongo_dao");
class BonusTemplateDao extends MongoDao 
{
    constructor()
    {
        super (bonusTemplateModel);
    }
}
module.exports= new BonusTemplateDao();