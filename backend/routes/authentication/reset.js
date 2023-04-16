"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resetController_js_1 = require("../../controllers/authentication/resetController.js");
const resetRouter = express_1.default.Router();
resetRouter.post("/api/forgot-password", resetController_js_1.resetController.changePassword);
exports.default = resetRouter;
