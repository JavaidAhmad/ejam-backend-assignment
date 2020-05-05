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
const template_1 = require("../../modals/template");
/**
 * @description fetch all templates
 * @param req Express request
 * @param res Express Response
 */
exports.templates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield template_1.Template.find();
        res.send({ data });
    }
    catch (error) {
        res.send(error);
    }
});
//# sourceMappingURL=template-controller.js.map