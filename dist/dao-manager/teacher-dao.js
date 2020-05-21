"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_dao_1 = require("./mongo-dao");
const teacher_model_1 = __importDefault(require("../models/teacher-model"));
class TeacherDao extends mongo_dao_1.MongoDao {
    constructor() {
        super(teacher_model_1.default);
    }
}
exports.default = TeacherDao;
//# sourceMappingURL=teacher-dao.js.map