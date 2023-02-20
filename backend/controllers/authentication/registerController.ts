import User from "../../models/User.js";
import { hashPassword } from "../../utils/bcrypt.js";

const registerUser = async (req: any, res: any) => {
  const { email, password, userName } = req.body;
  console.log({ email, password });
  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    userName: userName,
    email: email,
    password: hashedPassword,
    createdAt: new Date().toLocaleDateString("en-GB"),
  });
  newUser.save();
  res.status(200).json("New User Added!");
};

export const registerController = { registerUser };
