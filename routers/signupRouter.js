import express from "express";
import postSignup from "../controllers/postSignup.js";
import signupValidator from "../validators/signupValidator.js";

const signupRouter = express.Router();

signupRouter.get("/", (req, res) => {
    res.render("signup");
});

signupRouter.post("/", signupValidator, postSignup);
export default signupRouter;