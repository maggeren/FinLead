import User from "../../models/User.js";
import { comparePasswords } from "../../utils/bcrypt.js";

const loginUser = async (req: any, res: any) => {
  console.log("Nu er vi startet! fra localhost 4000.");
  console.log(req.body);
  try {
    const { email, password: plainTextPassword } = req.body;
    console.log("Plain text er ", plainTextPassword);
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
  console.log("Nu går det galt!");
  let hashedPassword = "";
  try {
    hashedPassword = (await getUserByEmail(email)).password;
    console.log("Der eksisterede faktisk en bruger med mail", email);
  } catch (error) {
    console.log("User does not exists", error);
  }
  return await comparePasswords(plainTextPassword, hashedPassword);
}
export const loginController = { loginUser, matchingPasswords, getUserByEmail };
