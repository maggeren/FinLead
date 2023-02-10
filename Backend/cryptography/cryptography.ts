const bcrypt = require("bcrypt");

/**
 * Returns hashed password
 * @param password user password before encryption
 */
async function hashPassword(password: string): Promise<String> {
  const saltRounds: number = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

/**
 * Returns true if the passwords match
 * @param plaintextPassword user password before encryption
 * @param hashedPassword user password after encryption
 */
async function comparePasswords(
  plaintextPassword: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    const result = await bcrypt.compare(plaintextPassword, hashedPassword);
    return result;
  } catch (err) {
    throw err;
  }
}
