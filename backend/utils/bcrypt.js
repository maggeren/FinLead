var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
/**
 * Returns hashed password
 * @param password user password before encryption
 */
export const hashPassword = (plaintextPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    const hashedPassword = yield bcrypt.hash(plaintextPassword, saltRounds);
    return hashedPassword;
});
/**
 * Returns true if the passwords match
 * @param plaintextPassword user password before encryption
 * @param hashedPassword user password after encryption
 */
export const comparePasswords = (plaintextPassword, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bcrypt.compare(plaintextPassword, hashedPassword);
        return result;
    }
    catch (err) {
        throw err;
    }
});
