import CustomQuery from "../db/query.js";
import bcryptjs from "bcryptjs";

const { hash } = bcryptjs;

const postSignup = async (req, res, next) => {
    const { password } = req.body;
    hash(password, 10, async (err, hashedPassword) => {
        if (err) {
            res.end();
        }
        await CustomQuery.createUser({ ...req.body, password: hashedPassword });
    })
    res.redirect("/signin");
};

export default postSignup;