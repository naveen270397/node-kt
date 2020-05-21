"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_route_1 = require("./routes/user-route");
const mongoose_1 = __importDefault(require("mongoose"));
class RestApp {
    constructor() {
        this.userRoutes = new user_route_1.Routes();
        this.app = express_1.default();
        this.config();
        this.userRoutes.routes(this.app);
        this.mongoUrl = "mongodb://127.0.0.1:27017/testdb";
        this.initializeMongoUrl();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    initializeMongoUrl() {
        mongoose_1.default.connect(this.mongoUrl);
    }
}
exports.default = new RestApp().app;
//# sourceMappingURL=index.js.map