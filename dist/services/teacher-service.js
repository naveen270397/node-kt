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
const teacher_dao_1 = __importDefault(require("../dao-manager/teacher-dao"));
let TeacherService = /** @class */ (() => {
    class TeacherService {
        static getallTeachers(requestObject = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield this.teacherDao.find(requestObject);
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        static getTeacher(requestObject) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = { _id: requestObject._id };
                try {
                    return yield this.teacherDao.findOne(query);
                }
                catch (error) {
                    throw error;
                }
            });
        }
        static addTeacher(requestObject) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield this.teacherDao.add(requestObject);
                }
                catch (error) {
                    throw error;
                }
            });
        }
        static editTeacher(requestObject) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const query = { _id: requestObject._id };
                    return yield this.teacherDao.update(query, requestObject);
                }
                catch (error) {
                    throw error;
                }
            });
        }
        static removeTeacher(requestObject) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const query = { _id: requestObject._id };
                    return yield this.teacherDao.remove(query);
                }
                catch (error) {
                    throw error;
                }
            });
        }
    }
    TeacherService.teacherDao = new teacher_dao_1.default();
    return TeacherService;
})();
exports.default = TeacherService;
//# sourceMappingURL=teacher-service.js.map