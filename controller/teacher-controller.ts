import TeacherService from "../services/teacher-service"
import {Request,Response} from "express"
class TeacherController 
{
    async findall(req:Request,res:Response)
    { let response=null;
        try{
            response = await TeacherService.getallTeachers(req.query);
        }
        catch(error)
        {
            throw error;
        }
        res.json(response);
    }
    async findone(req:Request,res:Response)
    {
        let response =null;
        try{
            response=await TeacherService.getTeacher(req.query);
        }
        catch(error)
        {
            throw error;
        }
        return res.json(response);
    }
    async add(req:Request,res:Response)
    {
        let response =null;
        try{
            response =await TeacherService.addTeacher(req.body)
        }
        catch(error)
        {
            throw error;
        }
        return res.json(response);
    } 
    async edit(req:Request,res:Response)
    {let response =null;
        try{
        response =await TeacherService.editTeacher(req.body);
        }
        catch(error)
        {
            throw error;
        }
        return res.json(response);
    }
    async remove (req:Request,res:Response)
    {
        try{
            await TeacherService.removeTeacher(req.query);
        }
        catch(error)
        {
            throw error;
        }
        return res.json({message:"deleted successfully"});
    }
}
export default new TeacherController();