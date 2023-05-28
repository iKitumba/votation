import { Router } from "express";
import { electionsController } from "../controllers/elections-controller";
import { authMiddleware } from "../middlewares/auth-middleware";

const electionsRoutes = Router();

electionsRoutes.use(authMiddleware);
electionsRoutes.post("/elections", electionsController.store);

export { electionsRoutes };
