import User from "../../models/User.js";
import { comparePasswords } from "../../utils/bcrypt.js";

const loginUser = async (req: any, res: any) => {
  try {
    const { email, password: plainTextPassword } = req.body;
    const user = await matchingPasswords(email, plainTextPassword);
    user
      ? res.status(200).json("Succesful")
      : res.status(400).json("Access denied");
  } catch (err) {
    console.log(err);
  }
};

async function getUserByEmail(email: string): Promise<any> {
  return await User.findOne({ email: email });
}

async function matchingPasswords(
  email: string,
  plainTextPassword: string
): Promise<boolean> {
  const hashedPassword = (await getUserByEmail(email)).password;
  return await comparePasswords(plainTextPassword, hashedPassword);
}
export const loginController = { loginUser, matchingPasswords, getUserByEmail };
