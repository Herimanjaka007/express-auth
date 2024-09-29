const getIndex = (req, res, next) => {
    const { user } = req;
    return res.render("index", { user });
}

export default getIndex;