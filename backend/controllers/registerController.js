var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/User.js";
import { hashPassword } from "../utils/bcrypt.js";
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, userName } = req.body;
    console.log({ email, password });
    const hashedPassword = yield hashPassword(password);
    const newUser = new User({
        userName: userName,
        email: email,
        password: hashedPassword,
        createdAt: new Date().toLocaleDateString("en-GB")
    });
    newUser.save();
    res.status(200).json("New User Added!");
});
export default registerUser;
