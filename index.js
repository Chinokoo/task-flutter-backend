// imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import taskRouter from "./routes/task.route.js";

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("server started on port 3000.");
});
