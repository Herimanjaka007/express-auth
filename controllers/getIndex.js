import CustomQuery from "../db/query.js";

const getIndex = async (req, res, next) => {
    const { user } = req;
    const messages = await CustomQuery.getMessagesJoinAuhtor();
    return res.render("index", { user, messages });
}

export default getIndex;