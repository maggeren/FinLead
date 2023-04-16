"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerController_js_1 = require("../../controllers/authentication/registerController.js");
const registerRouter = express_1.default.Router();
registerRouter.post("/api/register", registerController_js_1.registerController.registerUser);
exports.default = registerRouter;
