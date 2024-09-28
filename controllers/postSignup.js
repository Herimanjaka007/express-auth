import CustomQuery from "../db/query.js";

const postSignup = async (req, res, next) => {
    await CustomQuery.createUser(req.body);
    res.redirect("/signin");
};

export default postSignup;