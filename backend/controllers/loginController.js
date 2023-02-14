import User from "../models/User.js";

const loginUser = async (req, res) => {
  const email = req.body.email;
  const plainTextPassword = req.body.password;
  console.log({ email, plainTextPassword });
  const user = User.find({ email: email });
  const isUser = comparePassword(plainTextPassword, user.password);
  isUser ? res.send(200) : res.send(401);
};

export default loginUser;
