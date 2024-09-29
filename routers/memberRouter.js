import express from "express";

import postMember from "../controllers/postMember.js";

const memberRouter = express.Router();
memberRouter.post("/", postMember);

export default memberRouter;
