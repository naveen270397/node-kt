import {MongoDao} from "./mongo-dao"
import studentModel from "../models/student-model"

export default class StudentDao extends MongoDao
{
    constructor(){
        super(studentModel);
    }
}