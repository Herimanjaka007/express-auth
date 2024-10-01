import prisma from "../db/prisma.js";

const postMember = async (req, res) => {
    const { passphrase } = req.body;
    if (!req.user) {
        return res.redirect("/");
    }
    if (passphrase === "odin") {
        await prisma.users.update({
            where: {
                id: req.user.id
            },
            data: {
                is_member: true
            }
        })
        res.redirect("/");
    }
}

export default postMember;