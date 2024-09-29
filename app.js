import express from "express";
import path from "path";
import session from "express-session";
import passport from "passport";
import bcryptjs from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";

import indexRouter from "./routers/indexRouter.js";
import signinRouter from "./routers/signinRouter.js";
import signupRouter from "./routers/signupRouter.js";
import messageRouter from "./routers/messageRouter.js";
import dashboardRouter from "./routers/dashboardRouter.js";
import CustomQuery from "./db/query.js";

const app = express();

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await CustomQuery.getUserByUsername(username);
        if (!user) {
            return done(null, false, { message: "Wrong username" });
        }
        const { compare } = bcryptjs;
        const match = await compare(password, user.password);
        if (match) return done(null, user);
        return done(null, false, { message: "Wrong password" });
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await CustomQuery.getUserById(id);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
});

app.set("views", path.join(import.meta.dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "masina",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.session());

app.use("/", indexRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/message", messageRouter);
app.use("/dashboard", dashboardRouter);
app.get("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        return res.redirect("/signin");
    })
})

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));