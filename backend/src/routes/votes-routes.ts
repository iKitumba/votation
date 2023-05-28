import { Router } from "express";
import { votesController } from "../controllers/votes-controller";
import { authMiddleware } from "../middlewares/auth-middleware";

const votesRoutes = Router();

votesRoutes.post(
  "/:election_id/votes/:candidate_id",
  authMiddleware,
  votesController.store
);

export { votesRoutes };
