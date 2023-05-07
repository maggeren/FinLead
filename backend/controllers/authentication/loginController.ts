import User from "../../models/User.js";
import { comparePasswords } from "../../utils/bcrypt.js";
import jwt from "jsonwebtoken";

const loginUser = async (req: any, res: any) => {
  console.log("Nu er vi startet! fra localhost 4000.");
  console.log(req.body);
  try {
    const { email, password: plainTextPassword } = req.body;
    console.log("Plain text er ", plainTextPassword);
    const userExists = await matchingPasswords(email, plainTextPassword);
    if (userExists) {
      const user = await getUserByEmail(email);
      console.log(user);
      res.status(200).json(user);
    } else {
      res.status(400).json("Access denied!");
    }
  } catch (err) {
    console.log(err);
  }
};

const checkIsLoggedIn = async (req: any, res: any) => {
  if (req.session && req.session.user) {
    res.status(200).json({ isLoggedIn: true });
  } else {
    res.status(401).json({ isLoggedIn: false });
  }
};

async function getUserByEmail(email: string): Promise<any> {
  return await User.findOne({ email: email });
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

const logoutUser = (req: any, res: any) => {
  req.session.destroy(() => {
    //sessions gets destroyed and the user's session cookie is cleared as well.
    res.clearCookie("connect.sid", { path: "/" });
    res.status(200).json("Logged out!");
  });
};

async function matchingPasswords(
  email: string,
  plainTextPassword: string
): Promise<boolean> {
  console.log("Nu går det galt!");
  let hashedPassword = "";
  try {
    let user = await getUserByEmail(email);
    console.log(user);
    hashedPassword = (await getUserByEmail(email)).password;
    return true;
  } catch (error) {
    console.log("User does not exists", error);
  }
  console.log("Vi nåede herned!");
  return false;
}
export const loginController = {
  loginUser,
  matchingPasswords,
  getUserByEmail,
  logoutUser,
  checkIsLoggedIn,
};
