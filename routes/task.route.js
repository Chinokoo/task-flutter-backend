import { Router } from "express";
import { auth } from "./../middleware/auth.middleware.js";
import {
  createTask,
  getTasks,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = Router();

//geting all tasks by req.user.id
taskRouter.get("/", auth, getTasks);

//creating a new task
taskRouter.post("/create", auth, createTask);

//delete a task by id
taskRouter.delete("/:id", auth, deleteTask);

export default taskRouter;
