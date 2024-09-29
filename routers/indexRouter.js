import express from "express";
import getIndex from "../controllers/getIndex.js";

const indexRouter = express.Router();

indexRouter.get("/", getIndex);

export default indexRouter;