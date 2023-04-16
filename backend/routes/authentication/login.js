"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_js_1 = require("../../controllers/authentication/loginController.js");
const loginRouter = express_1.default.Router();
loginRouter.post("/api/login", loginController_js_1.loginController.loginUser);
exports.default = loginRouter;
