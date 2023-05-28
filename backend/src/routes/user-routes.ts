import { Router } from "express";
import { userController } from "../controllers/user-controller";

const userRoutes = Router();

userRoutes.post("/users", userController.store);

export { userRoutes };
