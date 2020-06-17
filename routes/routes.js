const BucketNameContoller =require("../controller/bonus_bucketname_controller");
const express =require( "express");
const Middleware = require( "../request/bucketvalidation");
let controllerObject= new BucketNameContoller();
 let router=express.Router();



router.get("/",function(req,res){
    res.send("welcome ");
})
router.post("/bucket",Middleware.addValidation,controllerObject.add);
router.get("/buckets",controllerObject.findAll);
router.get("/bucket",Middleware.bucketValidation,controllerObject.findByBucketName);
router.get("/bonuscodename",Middleware.bonusValidation,controllerObject.findByBonusCodeName);

module.exports=router;