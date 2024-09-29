import CustomQuery from "../db/query.js";

const getDashboard = async (req, res) => {
    const { user } = req;
    if (user) {
        const messages = await CustomQuery.getMessagesByAuthor(user);
        return res.render("index", { user, messages });
    }
    return res.redirect("/");
}

export default getDashboard;