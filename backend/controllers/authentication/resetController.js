var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import { loginController } from "./loginController.js";
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield loginController.getUserByEmail(email);
    if (!user)
        return res.status(400).json({ error: `No user exists with ${email}` });
    const secret = process.env.JWT_SECRET + user.password;
    const payload = { email: user.email, id: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `${process.env.DOMAIN_NAME}/${user.id}/${token}`;
    console.log(link);
    sendEmailToUser(user.email, link);
    res.status(200).json({ message: "Password reset link sent to email" });
});
function sendEmailToUser(email, link) {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO: Send email to user
    });
}
export const resetController = { changePassword };
