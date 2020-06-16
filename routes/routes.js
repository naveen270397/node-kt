const express =require( "express");
const BonusTemplateController =require( "../controller/bonustemplate_contoller");
const middleware=require("../request/bonustemplate_validation")
let bonusTemplateContoller =new BonusTemplateController();
let route=express.Router();
route.get("/",function(req,res){
    res.send("welcome");
})
route.post("/bonustemplate",middleware.addValidation,bonusTemplateContoller.addBonusTemplate);
route.get("/bonustemplate/:id",bonusTemplateContoller.findOneBonusTemplate);
route.get("/bonustemplate",bonusTemplateContoller.findBonusTemplate);
route.put("/editbonustemplate",middleware.editValidation,bonusTemplateContoller.updateBonusTemplate);
module.exports=route;