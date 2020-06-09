"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bucketSchema = new mongoose_1.default.Schema({
    bucketName: {
        type: String,
        required: true
    },
    bonusCode: {
        bonusCodeId: mongoose_1.Schema.Types.ObjectId,
        bonusCodeName: {
            type: String,
            requred: true,
        },
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"]
    }
});
exports.default = mongoose_1.default.model("bucketname_bonuscode", bucketSchema);
//# sourceMappingURL=bonus_bucketname.js.map