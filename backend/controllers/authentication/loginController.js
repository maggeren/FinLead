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
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Nu er vi startet! fra localhost 4000.");
    console.log(req.body);
    try {
        const { email, password: plainTextPassword } = req.body;
        console.log("Plain text er ", plainTextPassword);
        const userExists = yield matchingPasswords(email, plainTextPassword);
        if (userExists) {
            const user = yield getUserByEmail(email);
            console.log(user);
            res.status(200).json(user);
        }
        else {
            res.status(400).json("Access denied!");
        }
    }
    catch (err) {
        console.log(err);
    }
});
const checkIsLoggedIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.session && req.session.user) {
        res.status(200).json({ isLoggedIn: true });
    }
    else {
        res.status(401).json({ isLoggedIn: false });
    }
});
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User.findOne({ email: email });
    });
}
// const isLoggedIn = (req:any, res:any, next:any) => {
//      if(req.isAuthenticated()){
//       console.log("Du må godt logge ind!");
//       return next();
//      }
//      else{
//       res.status(400).json("You must be logged in to access this features")
//      }
// };
const logoutUser = (req, res) => {
    req.session.destroy(() => {
        //sessions gets destroyed and the user's session cookie is cleared as well.
        res.clearCookie("connect.sid", { path: "/" });
        res.status(200).json("Logged out!");
    });
};
function matchingPasswords(email, plainTextPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Nu går det galt!");
        let hashedPassword = "";
        try {
            let user = yield getUserByEmail(email);
            console.log(user);
            hashedPassword = (yield getUserByEmail(email)).password;
            return true;
        }
        catch (error) {
            console.log("User does not exists", error);
        }
        console.log("Vi nåede herned!");
        return false;
    });
}
export const loginController = {
    loginUser,
    matchingPasswords,
    getUserByEmail,
    logoutUser,
    checkIsLoggedIn,
};
