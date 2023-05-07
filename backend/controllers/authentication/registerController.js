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
import { hashPassword } from "../../utils/bcrypt.js";
import { loginController } from "./loginController.js";
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, userName } = req.body;
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
    const hashedPassword = yield hashPassword(password);
    const newUser = new User({
        userName: userName,
        email: email,
        password: hashedPassword,
        createdAt: new Date().toLocaleDateString("en-GB"),
    });
    newUser.save();
    yield loginController.loginUser(email, password);
    res.status(200).json("New User Added!");
});
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User.findOne({ email: email });
    });
}
function getUserByUserName(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User.findOne({ userName: userName });
    });
}
export const registerController = { registerUser };
