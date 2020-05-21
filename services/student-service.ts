import StudentDao from "../dao-manager/student-dao"
import { request } from "express";
export default class StudentService{
        static studentDao=new StudentDao();
      static async getallStudents(requestObject={})
     {
        
         try{
            return await this.studentDao.find(requestObject);
         }
         catch(error)
         {
             console.log(error);
         }
     }
     static async getStudent(requestObject:any)
     {
        const query={_id: requestObject._id}
        try
        {
            return await this.studentDao.findOne(query);
        }
        catch(error)
        {
            throw error; 
        }
     }
     static async addStudent (requestObject:any)
     { 
         try
        {
            return await this.studentDao.add(requestObject);
        }
        catch(error)
        {
            throw error;
        }
     }
    static async editStudent(requestObject:any)
     {
         try{
             const query={_id: requestObject._id}
             return await this.studentDao.update(query,requestObject);
         }
         catch(error)
         {
             throw error;
         }
     }
     static async removeStudent(requestObject:any)
     {
        try{
        const query={_id: requestObject._id};
        return await this.studentDao.remove(query);
        }
        catch(error)
        {
            throw error;
        }
     }
}