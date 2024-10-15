import mongoose from "mongoose";

export class connectDB {
  constructor(uri, dbName) {
    this.URI = uri;
    this.DBName = dbName;
  }

  async createConnection() {
    try {
      const connection = await mongoose.connect(this.URI, {
        dbName: this.DBName,
      });
      // console.log(`Connected to db: ${mongoose.connection.name}`);
      return connection;
    } catch (error) {
      console.log(`Error occured`);
    }
  }
}

const newConnection = new connectDB(
  process.env.MONGODB_URI,
  process.env.DB_NAME
);

newConnection
  .createConnection()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Error in connecting to the database:", err.message);
  });
