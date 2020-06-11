"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bucketSchema = new mongoose_1.default.Schema({
    bucketId: {
        type: Number,
        required: true
    },
    bucketName: {
        type: String,
        required: true
    },
    bonusCode: [{
            bonusCodeId: {
                type: String,
                required: true
            },
            bonusCodeName: {
                type: String,
                requred: true,
            }
        }],
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"]
    }
});
exports.default = mongoose_1.default.model("bucketname_bonuscode", bucketSchema);
//# sourceMappingURL=bonus_bucketname.js.map