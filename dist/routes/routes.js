"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bonus_bucketname_controller_1 = __importDefault(require("../controller/bonus_bucketname_controller"));
const express_1 = __importDefault(require("express"));
let controllerObject = new bonus_bucketname_controller_1.default();
exports.router = express_1.default.Router();
exports.router.get("/", function (req, res) {
    res.send("welcome ");
});
exports.router.post("/add", controllerObject.add);
exports.router.get("/all", controllerObject.findAll);
exports.router.get("/bucketname", controllerObject.findByBucketName);
exports.router.get("/bonuscodename", controllerObject.findByBonusCodeName);
//# sourceMappingURL=routes.js.map