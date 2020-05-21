"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const student_controller_1 = __importDefault(require("../controller/student-controller"));
const teacher_controller_1 = __importDefault(require("../controller/teacher-controller"));
class Routes {
    // private teacherController=new teacherController();
    //private studentController=new studentController();
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({ message: "Hey there , Welcome to RestApi" });
        });
        app.route("/teacher/get").get(teacher_controller_1.default.findall);
        app.route("/teacher/getone").get(teacher_controller_1.default.findone);
        app.route("/teacher/add").post(teacher_controller_1.default.add);
        app.route("/teacher/update").put(teacher_controller_1.default.edit);
        app.route("/teacher/delete").delete(teacher_controller_1.default.remove);
        app.route("/student/get").get(student_controller_1.default.findall);
        app.route("/student/getone").get(student_controller_1.default.findone);
        app.route("/student/add").post(student_controller_1.default.add);
        app.route("/student/update").put(student_controller_1.default.edit);
        app.route("/student/delete").delete(student_controller_1.default.remove);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=user-route.js.map