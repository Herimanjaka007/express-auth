import prisma from "../db/prisma.js";

const postMessage = async (req, res, next) => {
    if (req.user) {
        await prisma.posts.create({
            data: {
                ...req.body,
                user_id: req.user.id
            }
        })
        return res.redirect("/");
    }
    return res.redirect("/signin");
}

export default postMessage;