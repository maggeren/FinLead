import User from "../models/User.js";
import { comparePasswords } from "../utils/bcrypt.js";
export const loginUser = async (req, res) => {
  try {
    const { email, password: plainTextPassword } = req.body;
    const hashedPassword = (await User.findOne({ email: email })).password;
    const isUser = await comparePasswords(plainTextPassword, hashedPassword);
    isUser
      ? res.status(200).json("Succesful")
      : res.status(400).json("Access denied");
  } catch (err) {
    console.log(err);
  }
};
