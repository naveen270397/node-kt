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
const bonus_bucketname_dao_1 = __importDefault(require("../dao_manager/bonus_bucketname_dao"));
class BucketNameBonusService {
    static add(requestObject) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bonus_bucketname_dao_1.default.save(requestObject);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getAll(requestObject = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bonus_bucketname_dao_1.default.getAll(requestObject);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getByBucketName(requestObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                bucketName: requestObject.query.bucketName
            };
            try {
                return yield bonus_bucketname_dao_1.default.getByBucketName(query);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getByBonusCodeName(requestObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                "bonusCode.bonusCodeName": requestObject.query.bonusCodeName
            };
            try {
                return yield bonus_bucketname_dao_1.default.getByBonusCodeName(query);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.default = BucketNameBonusService;
//# sourceMappingURL=bonus_bucketname_service.js.map