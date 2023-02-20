var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../../models/User.js";
import { comparePasswords } from "../../utils/bcrypt.js";
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password: plainTextPassword } = req.body;
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
        return yield User.findOne({ email: email });
    });
}
function matchingPasswords(email, plainTextPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = (yield getUserByEmail(email)).password;
        return yield comparePasswords(plainTextPassword, hashedPassword);
    });
}
export const loginController = { loginUser, matchingPasswords, getUserByEmail };
