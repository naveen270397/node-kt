import {MongoDao} from "./mongo-dao"
import teacherModel from "../models/teacher-model"

export default class TeacherDao extends MongoDao
{
constructor()
{
    super(teacherModel);
}
}

