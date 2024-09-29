import CustomQuery from "../db/query.js";

const postMember = async (req, res) => {
    const { passphrase } = req.body;
    if (!req.user) {
        return res.redirect("/");
    }
    if (passphrase === "odin") {
        await CustomQuery.makeMember(req.user);
        res.redirect("/");
    }
}

export default postMember;