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
const bonus_bucketname_service_1 = __importDefault(require("../services/bonus_bucketname_service"));
class BucketNameController {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObject = null;
            try {
                responseObject = yield bonus_bucketname_service_1.default.add(req.body);
            }
            catch (err) {
                console.log(err);
            }
            res.json(responseObject);
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObject = null;
            try {
                responseObject = yield bonus_bucketname_service_1.default.getAll();
            }
            catch (err) {
                console.log(err);
            }
            res.json(responseObject);
        });
    }
    findByBucketName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObject = null;
            try {
                responseObject = yield bonus_bucketname_service_1.default.getByBucketName(req);
            }
            catch (err) {
                console.log(err);
            }
            res.json(responseObject);
        });
    }
    findByBonusCodeName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObject = null;
            try {
                responseObject = yield bonus_bucketname_service_1.default.getByBonusCodeName(req);
            }
            catch (err) {
                console.log(err);
            }
            res.json(responseObject);
        });
    }
}
exports.default = BucketNameController;
//# sourceMappingURL=bonus_bucketname_controller.js.map