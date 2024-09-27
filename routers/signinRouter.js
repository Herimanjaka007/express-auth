import express from "express";

const signinRouter = express.Router();

signinRouter.get("/", (req, res) => {
    res.render("signin");
});

export default signinRouter;