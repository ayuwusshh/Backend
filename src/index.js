import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({path: ".env"});
import express from "express";
const app = express();
await connectDB();

/*import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
; (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`,)
    app.on("error", (err) => {
      console.error("Error in Express app:", err);
    })
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw e;
  }
})() */