// import User from "../../models/User.js";
// import { v4 } from "uuid";
import jwt from "jsonwebtoken";
import { loginController } from "./loginController.js";

const changePassword = async (req: any, res: any) => {
  const { email } = req.body;
  const user = await loginController.getUserByEmail(email);
  if (!user)
    return res.status(400).json({ error: `No user exists with ${email}` });
  const secret = process.env.JWT_SECRET + user.password;
  const payload = { email: user.email, id: user.id };
  const token = jwt.sign(payload, secret, { expiresIn: "15m" });
  const link = `${process.env.DOMAIN_NAME}/${user.id}/${token}`;
  console.log(link);
  sendEmailToUser(user.email, link);
  res.status(200).json({ message: "Password reset link sent to email" });
};

async function sendEmailToUser(email: string, link: string) {
  //TODO: Send email to user
}

//Comment.
export const resetController = { changePassword };
