import bcrypt from "bcrypt";

/**
 * Returns hashed password
 * @param password user password before encryption
 */
export const hashPassword = async (
  plaintextPassword: string
): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
  return hashedPassword;
};

/**
 * Returns true if the passwords match
 * @param plaintextPassword user password before encryption
 * @param hashedPassword user password after encryption
 */
export const comparePasswords = async (
  plaintextPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const result = await bcrypt.compare(plaintextPassword, hashedPassword);
    console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
};
