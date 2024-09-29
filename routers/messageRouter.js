import express from "express";
import postMessage from "../controllers/postMessage.js";
import messageValidator from "../validators/messageValidator.js";

const messageRouter = express.Router();

messageRouter.post("/", messageValidator, postMessage);

export default messageRouter;