const mongoose = require("mongoose");

/**
 * Connect to MongoDB
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION, {
      //Enables new URL parsing logic for security.
      useNewUrlParser: true,
      //Uses a new engine for managing MongoDB connections.
      useUnifiedTopology: true,
      //Automatically creates missing indexes in the database.
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
