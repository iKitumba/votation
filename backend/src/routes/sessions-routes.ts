import { Router } from "express";
import { sessionsController } from "../controllers/sessions-controller";

const sessionsRoutes = Router();

sessionsRoutes.post("/sessions", sessionsController.store);

export { sessionsRoutes };
