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
const bonus_bucketname_1 = __importDefault(require("../models/bonus_bucketname"));
class MongoDao {
    constructor() {
        this.daoObject = bonus_bucketname_1.default;
    }
    save(insertObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.daoObject.create(insertObj);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getAll(criteria, projections = "", options = { lean: true }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.daoObject.find(criteria, projections, options);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getByBucketName(criteria, projections = "", options = { lean: true }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.daoObject.find(criteria, projections, options);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getByBonusCodeName(criteria, projections = "", options = { lean: true }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.daoObject.find(criteria, projections, options);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.default = new MongoDao();
//# sourceMappingURL=bonus_bucketname_dao.js.map