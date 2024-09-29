import express from "express";

import getDashboard from "../controllers/getDashboard.js";

const dashboardRouter = express.Router();
dashboardRouter.get("/", getDashboard);

export default dashboardRouter;