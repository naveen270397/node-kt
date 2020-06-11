"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const Schema = joi_1.default.object().keys({
    bucketId: joi_1.default.number()
        .min(0),
    bucketName: joi_1.default.string()
        .required(),
    bonusCode: joi_1.default.array()
        .items(joi_1.default.object({
        bonusCodeId: joi_1.default.string().required(),
        bonusCodeName: joi_1.default.string().required()
    })),
    status: joi_1.default.string().valid("ACTIVE", "INACTIVE")
}).with("bucketName", "bonusCode");
exports.validateMiddleware = function (req, res, next) {
    if (req.path == "/add") {
        try {
            Schema.validate(req.body);
            next();
        }
        catch (err) {
            throw err;
        }
    }
    if (req.path == "/bucketname") {
        try {
            Schema.validate({ bucketName: req.query.bucketName });
            next();
        }
        catch (err) {
            throw err;
        }
    }
    if (req.path == "/bonuscodename") {
        try {
            Schema.validate({ bonusCodeName: req.query.bonusCodeName });
            next();
        }
        catch (err) {
            throw err;
        }
    }
};
//# sourceMappingURL=bucketvalidation.js.map