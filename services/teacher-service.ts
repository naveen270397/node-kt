import TeacherDao from "../dao-manager/teacher-dao"
import { request } from "express";
export default class TeacherService{
        static teacherDao=new TeacherDao();
      static async getallTeachers(requestObject={})
     {
        
         try{
            return await this.teacherDao.find(requestObject);
         }
         catch(error)
         {
             console.log(error);
         }
     }
     static async getTeacher(requestObject:any)
     {
        const query={_id: requestObject._id}
        try
        {
            return await this.teacherDao.findOne(query);
        }
        catch(error)
        {
            throw error; 
        }
     }
     static async addTeacher (requestObject:any)
     { 
         try
        {
            return await this.teacherDao.add(requestObject);
        }
        catch(error)
        {
            throw error;
        }
     }
    static async editTeacher(requestObject:any)
     {
         try{
             const query={_id: requestObject._id}
             return await this.teacherDao.update(query,requestObject);
         }
         catch(error)
         {
             throw error;
         }
     }
     static async removeTeacher(requestObject:any)
     {
        try{
        const query={_id: requestObject._id};
        return await this.teacherDao.remove(query);
        }
        catch(error)
        {
            throw error;
        }
     }
}