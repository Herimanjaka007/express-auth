import express from "express";
import passport from "passport";

const signinRouter = express.Router();

signinRouter.get("/", (req, res) => {
    res.render("signin");
});

signinRouter.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/signin",
    }));

export default signinRouter;