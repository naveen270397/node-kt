"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const teacherModel = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: "firstName is must"
    },
    lastName: {
        type: String,
    },
    phoneNo: {
        type: Number
    },
    dateJoined: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.default.model("teacher", teacherModel);
//# sourceMappingURL=teacher-model.js.map