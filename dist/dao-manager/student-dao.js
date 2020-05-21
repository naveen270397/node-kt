"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_dao_1 = require("./mongo-dao");
const student_model_1 = __importDefault(require("../models/student-model"));
class StudentDao extends mongo_dao_1.MongoDao {
    constructor() {
        super(student_model_1.default);
    }
}
exports.default = StudentDao;
//# sourceMappingURL=student-dao.js.map