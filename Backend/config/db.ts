import mongoose from "mongoose";

/**
 * Connect to MongoDB
 */
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      process.env.DB_CONNECTION as string,
      {}
    );
    console.log(`💾 MongoDB connected: ${conn.connection.host} 💾`);
  } catch (err) {
    console.error(err);
    //Everything else than 0 exits the prcoess with a failure.
    process.exit(1);
  }
};

export default connectDB;
