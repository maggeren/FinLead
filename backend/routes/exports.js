"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const login_js_1 = __importDefault(require("./authentication/login.js"));
const register_js_1 = __importDefault(require("./authentication/register.js"));
const reset_js_1 = __importDefault(require("./authentication/reset.js"));
exports.routes = { loginRouter: login_js_1.default, registerRouter: register_js_1.default, resetRouter: reset_js_1.default };
