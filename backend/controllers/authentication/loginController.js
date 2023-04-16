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
exports.loginController = void 0;
const User_js_1 = __importDefault(require("../../models/User.js"));
const bcrypt_js_1 = require("../../utils/bcrypt.js");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Nu er vi startet! fra localhost 4000.");
    console.log(req.body);
    try {
        const { email, password: plainTextPassword } = req.body;
        console.log("Plain text er ", plainTextPassword);
        const user = yield matchingPasswords(email, plainTextPassword);
        user
            ? res.status(200).json("Succesful")
            : res.status(400).json("Access denied");
    }
    catch (err) {
        console.log(err);
    }
});
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_js_1.default.findOne({ email: email });
    });
}
function matchingPasswords(email, plainTextPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Nu går det galt!");
        let hashedPassword = "";
        try {
            hashedPassword = (yield getUserByEmail(email)).password;
            console.log("Der eksisterede faktisk en bruger med mail", email);
        }
        catch (error) {
            console.log("User does not exists", error);
        }
        return yield (0, bcrypt_js_1.comparePasswords)(plainTextPassword, hashedPassword);
    });
}
exports.loginController = { loginUser, matchingPasswords, getUserByEmail };
