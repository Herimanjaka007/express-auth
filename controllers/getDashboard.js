import prisma from "../db/prisma.js";

const getDashboard = async (req, res) => {
    const { user } = req;
    if (user) {
        const messages = await prisma.posts.findMany({
            where: {
                user_id: user.id,
            }
        })
        return res.render("index", { user, messages });
    }
    return res.redirect("/");
}

export default getDashboard;