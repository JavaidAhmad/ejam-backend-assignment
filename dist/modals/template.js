"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const templateSchema = mongoose_1.default.Schema({
    name: String,
    versions: [String]
});
exports.Template = mongoose_1.default.model('template', templateSchema);
//# sourceMappingURL=template.js.map