import { Router } from "express";
import { userRoutes } from "./user-routes";
import { sessionsRoutes } from "./sessions-routes";
import { electionsRoutes } from "./elections-routes";
import { candidatesRoutes } from "./candidates-routes";
import { votesRoutes } from "./votes-routes";

const routes = Router();

routes.use(userRoutes);
routes.use(sessionsRoutes);
routes.use(electionsRoutes);
routes.use(candidatesRoutes);
routes.use(votesRoutes);

export default routes;
