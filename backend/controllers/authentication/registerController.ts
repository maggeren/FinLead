import User from "../../models/User.js";
import { hashPassword } from "../../utils/bcrypt.js";
import { loginController } from "./loginController.js";

const registerUser = async (req: any, res: any) => {
  const { email, password, userName } = req.body;
  const exists = await getUserByEmail(email);
  const userNameExists = await getUserByUserName(userName);
  if(exists) {console.log("Email allerede i brug"); return res.status(409).json("Email allready exist");} 
  else if(userNameExists) {console.log("Bruger allerede i brug"); return res.status(409).json("Username allready exist");}
  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    userName: userName,
    email: email,
    password: hashedPassword,
    createdAt: new Date().toLocaleDateString("en-GB"),
  });
  newUser.save();
  await loginController.loginUser(email, password);
  res.status(200).json("New User Added!");
};


async function getUserByEmail(email: string): Promise<any> {
  return await User.findOne({ email: email });
}

async function getUserByUserName(userName: string): Promise<any> {
  return await User.findOne({ userName: userName });
}





export const registerController = { registerUser };
