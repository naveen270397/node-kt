"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const studentModel = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: "firstName is must"
    },
    lastName: {
        type: String
    },
    phoneNo: {
        type: Number
    },
    classTeacher: {
        type: String,
        required: "enter the classteacher name"
    },
    dateJoined: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.default.model("student", studentModel);
//# sourceMappingURL=studentModel.js.map