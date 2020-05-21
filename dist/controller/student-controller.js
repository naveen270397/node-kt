"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_service_1 = __importDefault(require("../services/student-service"));
class StudentController {
    findall(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = null;
            try {
                response = yield student_service_1.default.getallStudents(req.query);
            }
            catch (error) {
                throw error;
            }
            res.json(response);
        });
    }
    findone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = null;
            try {
                response = yield student_service_1.default.getStudent(req.query);
            }
            catch (error) {
                throw error;
            }
            return res.json(response);
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = null;
            try {
                response = yield student_service_1.default.addStudent(req.body);
            }
            catch (error) {
                throw error;
            }
            return res.json(response);
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = null;
            try {
                response = yield student_service_1.default.editStudent(req.body);
            }
            catch (error) {
                throw error;
            }
            return res.json(response);
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield student_service_1.default.removeStudent(req.query);
            }
            catch (error) {
                throw error;
            }
            return res.json({ message: "deleted successfully" });
        });
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student-controller.js.map