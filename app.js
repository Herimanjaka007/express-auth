import express from "express";
import path from "path";

import indexRouter from "./routers/indexRouter.js";
import signinRouter from "./routers/signinRouter.js";
import signupRouter from "./routers/signupRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));