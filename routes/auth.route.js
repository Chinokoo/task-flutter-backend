import { Router } from "express";
import {
  signup,
  signin,
  tokenIsValid,
  getUserToken,
} from "../controllers/auth.controller.js";

const authRouter = Router();

//sign in route
authRouter.post("/signup", signup);

// login route
authRouter.post("/signin", signin);

//checking if auth is valid route
authRouter.get("/check-auth", tokenIsValid);

authRouter.get("/", getUserToken);

// export the router
export default authRouter;
