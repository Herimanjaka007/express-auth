import prisma from "../db/prisma.js";

const getIndex = async (req, res, next) => {
    const { user } = req;
    const messages = await prisma.posts.findMany({
        include: {
            users: true
        }
    });
    return res.render("index", { user, messages });
}

export default getIndex;