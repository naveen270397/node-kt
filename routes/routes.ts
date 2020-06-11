import BucketNameContoller from "../controller/bonus_bucketname_controller"
import express from "express"
import {validateMiddleware} from "../validation/bucketvalidation"
let controllerObject= new BucketNameContoller();
export let router=express.Router();



router.get("/",function(req,res){
    res.send("welcome ");
})
router.post("/add",validateMiddleware,controllerObject.add);
router.get("/all",controllerObject.findAll);
router.get("/bucketname",validateMiddleware,controllerObject.findByBucketName);
router.get("/bonuscodename",validateMiddleware,controllerObject.findByBonusCodeName);
