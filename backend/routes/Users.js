require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { userMiddleware } = require('../middlewares/midellwares');

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            address: req.body.address,
            password: hashedPassword
        })

        const newUser = await user.save();
        newUser.password = req.body.password;
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user == null)
        return res.status(400).send("Cannot find user");
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign(user.id, "e1f3d34567fab5d71aaffecd619306ad5f7e1c6adcef173048ad58c6f9a16d7c");
            res.status(200).json({ token: token });
        } else {
            res.status(400).send("Wrong password");
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/me", userMiddleware, async (req, res) => {
    const newUser = {
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        address: req.user.address,
        phone: req.user.phone,
    }

    return res.status(200).json({ message: newUser });
})

router.patch("/changePass", userMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return respond(res, false, "User does not exist!");
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.set('password', hashedPassword);
        await user.save();

        return res.status(200).json({ message: user });
    } catch (e) {
        return res.status(500).json({ message: e?.message });
    }
})


module.exports = router
