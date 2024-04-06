const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userMiddleware = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.json({ message: "Authorization required!" });
    }

    const token = req.headers.authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "e1f3d34567fab5d71aaffecd619306ad5f7e1c6adcef173048ad58c6f9a16d7c");
        const userID = decoded;
        const user = await User.findById(userID);
        if (!user) {
            return res.json({ message: "User does not exist!" });
        }

        req.user = user;

        return next();
    } catch (e) {
        return res.json({ message: "Error verifying user: " + e?.message });
    }
}

module.exports = { userMiddleware }