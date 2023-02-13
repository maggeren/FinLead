const getUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isUser = comparePassword(plain, hashed);
  isUser ? res.send(200) : res.send(401);
};

export default getUser;
