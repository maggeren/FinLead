var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
/**
 * Connect to MongoDB
 */
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.set("strictQuery", false);
        const conn = yield mongoose.connect(process.env.DB_CONNECTION, {});
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(err);
        //Everything else than 0 exits the prcoess with a failure.
        process.exit(1);
    }
});
export default connectDB;
