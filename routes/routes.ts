import BucketNameContoller from "../controller/bonus_bucketname_controller"
import express from "express"
let controllerObject= new BucketNameContoller();
export let router=express.Router();
router.get("/",function(req,res){
    res.send("welcome ");
})
router.post("/add",controllerObject.add);
router.get("/all",controllerObject.findAll);
router.get("/bucketname",controllerObject.findByBucketName);
router.get("/bonuscodename",controllerObject.findByBonusCodeName);
