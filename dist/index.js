"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importStar(require("body-parser"));
const routes_1 = require("./routes/routes");
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.expressapp = express_1.default();
        this.mongoUrl = "mongodb://127.0.0.1:27017/testdb";
        this.config();
        this.initializeMongo();
        this.expressapp.use("/bucketnamebonuscode", routes_1.router);
    }
    config() {
        this.expressapp.use(body_parser_1.default.json());
        this.expressapp.use(body_parser_1.urlencoded({ extended: true }));
    }
    initializeMongo() {
        mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.default = new App().expressapp;
//# sourceMappingURL=index.js.map