import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user });

    if (!tasks) return res.status(404).json({ message: "Tasks not found!" });

    if (tasks.length === 0)
      return res.status(400).json({ message: "No tasks created" });

    res.status(200).json({ message: "Tasks retrieved successfully", tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error in getTasks", error);
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, hexColor, dueDate } = req.body;
    console.log(req.user._id);

    if (!title || !description || !hexColor || !dueDate)
      return res.status(400).json({ message: "All fields are required!" });

    const task = await Task.create({
      title,
      description,
      hexColor,
      dueDate,
      owner: req.user,
    });

    await task.save();

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error when creating a task", error);
  }
};
