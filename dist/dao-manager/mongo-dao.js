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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDao = void 0;
class MongoDao {
    constructor(model) {
        this.model = model;
    }
    find(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.find(criteria);
            }
            catch (error) {
                throw error;
            }
        });
    }
    findOne(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.findOne(criteria);
            }
            catch (error) {
                throw error;
            }
        });
    }
    add(objectToSave) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.create(objectToSave);
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(criteria, dataToSet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.findOneAndUpdate(criteria, dataToSet, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    remove(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.deleteOne(criteria);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.MongoDao = MongoDao;
//# sourceMappingURL=mongo-dao.js.map