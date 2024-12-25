import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//token creation function
const createToken = (id) => {
  //jwt token creation
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required!" });

    let user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ message: "User with this email already exists" });

    const hashedPassword = await bcrypt.hash(password, 7);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = createToken(user._id);

    res.status(201).json({ message: "User created successfully", user, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required!" });

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      res.status(400).json({ message: "Invalid Email or Password" });

    const token = createToken(user._id);
    res
      .status(200)
      .json({ message: "User signed in successfully", token, user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

export const tokenIsValid = async (req, res) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!verified)
      return res
        .status(401)
        .json({ message: "Token is not valid", success: false });

    const user = await User.findById(verified.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not found", success: false });

    res.status(200).json({ message: "Token is valid", success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

export const getUserToken = async (req, res) => {
  const user = await User.findById(req.user);

  res.json({ message: "User found", token: req.token, user });
};
