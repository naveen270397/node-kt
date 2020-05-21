import StudentService from "../services/student-service"
import {Request,Response} from "express"
class StudentController 
{
    async findall(req:Request,res:Response)
    { let response=null;
        try{
            response = await StudentService.getallStudents(req.query);
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
            response=await StudentService.getStudent(req.query);
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
            response =await StudentService.addStudent(req.body)
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
        response =await StudentService.editStudent(req.body);
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
            await StudentService.removeStudent(req.query);
        }
        catch(error)
        {
            throw error;
        }
        return res.json({message:"deleted successfully"});
    }
}
export default new StudentController();