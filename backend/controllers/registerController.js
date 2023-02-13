import hashPassword from "bcrypt";

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    email,
    password: hashedPassword,
  });
  newUser.save();
  res.send(200);
};

export default registerUser;
