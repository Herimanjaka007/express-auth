import CustomQuery from "../db/query.js";

const postMessage = async (req, res, next) => {
    if (req.user) {
        await CustomQuery.createMessage({ ...req.body, ...req.user });
        return res.redirect("/");
    }
    return res.redirect("/signin");
}

export default postMessage;