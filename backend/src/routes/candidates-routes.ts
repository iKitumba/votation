import { Router } from "express";
import { candidatesController } from "../controllers/candidates-controller";
import { authMiddleware } from "../middlewares/auth-middleware";
import multer from "multer";
import { multerConfig } from "../config/multer";

const candidatesRoutes = Router();

const upload = multer(multerConfig).single("avatar");

candidatesRoutes.post(
  "/elections/:election_id/candidates",
  authMiddleware,
  upload,
  candidatesController.store
);
candidatesRoutes.get("/elections/:election_id", candidatesController.index);

export { candidatesRoutes };
