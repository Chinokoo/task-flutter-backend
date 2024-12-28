import mongoose from "mongoose";
import User from "./user.model.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      minLength: 3,
      maxlength: 50,
    },
    description: {
      required: true,
      type: String,
      minLength: 5,
      maxlength: 300,
    },
    hexColor: {
      required: true,
      type: String,
      minLength: 3,
      maxlength: 7,
    },
    dueDate: {
      type: Date,
    },
    owner: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
