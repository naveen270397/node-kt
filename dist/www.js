"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
index_1.default.listen(3000, () => {
    console.log("server started on port 3000");
});
//# sourceMappingURL=www.js.map