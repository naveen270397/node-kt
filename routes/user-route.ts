import {Request,Response} from "express"
import studentController from "../controller/student-controller"
import teacherController from "../controller/teacher-controller";
export class Routes
{
   // private teacherController=new teacherController();
    //private studentController=new studentController();
    public routes(app:any)
    {
        app.route("/").get((req:Request,res:Response)=>{
            res.status(200).send({message:"Hey there , Welcome to RestApi"});
        })

        app.route("/teacher/get").get(teacherController.findall);
        app.route("/teacher/getone").get(teacherController.findone);
        app.route("/teacher/add").post(teacherController.add);
        app.route("/teacher/update").put(teacherController.edit);
        app.route("/teacher/delete").delete(teacherController.remove);



        app.route("/student/get").get(studentController.findall);
        app.route("/student/getone").get(studentController.findone);
        app.route("/student/add").post(studentController.add);
        app.route("/student/update").put(studentController.edit);
        app.route("/student/delete").delete(studentController.remove)
        
    }
}