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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const User_js_1 = __importDefault(require("../../models/User.js"));
const bcrypt_js_1 = require("../../utils/bcrypt.js");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" KIG HER");
    console.log(req.params);
    const { email, password, userName } = req.body;
    console.log({ email, password });
    const exists = yield getUserByEmail(email);
    const userNameExists = yield getUserByUserName(userName);
    if (exists) {
        console.log("Email allerede i brug");
        return res.status(409).json("Email allready exist");
    }
    else if (userNameExists) {
        console.log("Bruger allerede i brug");
        return res.status(409).json("Username allready exist");
    }
    const hashedPassword = yield (0, bcrypt_js_1.hashPassword)(password);
    const newUser = new User_js_1.default({
        userName: userName,
        email: email,
        password: hashedPassword,
        createdAt: new Date().toLocaleDateString("en-GB"),
    });
    newUser.save();
    res.status(200).json("New User Added!");
});
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_js_1.default.findOne({ email: email });
    });
}
function getUserByUserName(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_js_1.default.findOne({ userName: userName });
    });
}
exports.registerController = { registerUser };
