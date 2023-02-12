const bcrypt = require("bcrypt");

/**
 * Returns hashed password
 * @param password user password before encryption
 */
async function hashPassword(plaintextPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

/**
 * Returns true if the passwords match
 * @param plaintextPassword user password before encryption
 * @param hashedPassword user password after encryption
 */
async function comparePasswords(plaintextPassword, hashedPassword) {
  try {
    const result = await bcrypt.compare(plaintextPassword, hashedPassword);
    return result;
  } catch (err) {
    throw err;
  }
}

export default { hashPassword, comparePasswords };
